# `computeSharedVpcServiceProject` Submodule <a name="`computeSharedVpcServiceProject` Submodule" id="@cdktf/provider-google.computeSharedVpcServiceProject"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeSharedVpcServiceProject <a name="ComputeSharedVpcServiceProject" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_shared_vpc_service_project google_compute_shared_vpc_service_project}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_shared_vpc_service_project

computeSharedVpcServiceProject.ComputeSharedVpcServiceProject(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  host_project: str,
  service_project: str,
  deletion_policy: str = None,
  id: str = None,
  timeouts: ComputeSharedVpcServiceProjectTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.Initializer.parameter.hostProject">host_project</a></code> | <code>str</code> | The ID of a host project to associate. |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.Initializer.parameter.serviceProject">service_project</a></code> | <code>str</code> | The ID of the project that will serve as a Shared VPC service project. |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | The deletion policy for the shared VPC service. |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_shared_vpc_service_project#id ComputeSharedVpcServiceProject#id}. |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeouts">ComputeSharedVpcServiceProjectTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `host_project`<sup>Required</sup> <a name="host_project" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.Initializer.parameter.hostProject"></a>

- *Type:* str

The ID of a host project to associate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_shared_vpc_service_project#host_project ComputeSharedVpcServiceProject#host_project}

---

##### `service_project`<sup>Required</sup> <a name="service_project" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.Initializer.parameter.serviceProject"></a>

- *Type:* str

The ID of the project that will serve as a Shared VPC service project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_shared_vpc_service_project#service_project ComputeSharedVpcServiceProject#service_project}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

The deletion policy for the shared VPC service.

Setting ABANDON allows the resource
to be abandoned rather than deleted. Possible values are: "ABANDON".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_shared_vpc_service_project#deletion_policy ComputeSharedVpcServiceProject#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_shared_vpc_service_project#id ComputeSharedVpcServiceProject#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeouts">ComputeSharedVpcServiceProjectTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_shared_vpc_service_project#timeouts ComputeSharedVpcServiceProject#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_shared_vpc_service_project#create ComputeSharedVpcServiceProject#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_shared_vpc_service_project#delete ComputeSharedVpcServiceProject#delete}.

---

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ComputeSharedVpcServiceProject resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import compute_shared_vpc_service_project

computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import compute_shared_vpc_service_project

computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import compute_shared_vpc_service_project

computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import compute_shared_vpc_service_project

computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ComputeSharedVpcServiceProject resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ComputeSharedVpcServiceProject to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ComputeSharedVpcServiceProject that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_shared_vpc_service_project#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ComputeSharedVpcServiceProject to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference">ComputeSharedVpcServiceProjectTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.property.hostProjectInput">host_project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.property.serviceProjectInput">service_project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeouts">ComputeSharedVpcServiceProjectTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.property.hostProject">host_project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.property.serviceProject">service_project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.property.timeouts"></a>

```python
timeouts: ComputeSharedVpcServiceProjectTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference">ComputeSharedVpcServiceProjectTimeoutsOutputReference</a>

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `host_project_input`<sup>Optional</sup> <a name="host_project_input" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.property.hostProjectInput"></a>

```python
host_project_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `service_project_input`<sup>Optional</sup> <a name="service_project_input" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.property.serviceProjectInput"></a>

```python
service_project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ComputeSharedVpcServiceProjectTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeouts">ComputeSharedVpcServiceProjectTimeouts</a>]

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `host_project`<sup>Required</sup> <a name="host_project" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.property.hostProject"></a>

```python
host_project: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `service_project`<sup>Required</sup> <a name="service_project" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.property.serviceProject"></a>

```python
service_project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeSharedVpcServiceProjectConfig <a name="ComputeSharedVpcServiceProjectConfig" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_shared_vpc_service_project

computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  host_project: str,
  service_project: str,
  deletion_policy: str = None,
  id: str = None,
  timeouts: ComputeSharedVpcServiceProjectTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectConfig.property.hostProject">host_project</a></code> | <code>str</code> | The ID of a host project to associate. |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectConfig.property.serviceProject">service_project</a></code> | <code>str</code> | The ID of the project that will serve as a Shared VPC service project. |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | The deletion policy for the shared VPC service. |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_shared_vpc_service_project#id ComputeSharedVpcServiceProject#id}. |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeouts">ComputeSharedVpcServiceProjectTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `host_project`<sup>Required</sup> <a name="host_project" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectConfig.property.hostProject"></a>

```python
host_project: str
```

- *Type:* str

The ID of a host project to associate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_shared_vpc_service_project#host_project ComputeSharedVpcServiceProject#host_project}

---

##### `service_project`<sup>Required</sup> <a name="service_project" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectConfig.property.serviceProject"></a>

```python
service_project: str
```

- *Type:* str

The ID of the project that will serve as a Shared VPC service project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_shared_vpc_service_project#service_project ComputeSharedVpcServiceProject#service_project}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectConfig.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

The deletion policy for the shared VPC service.

Setting ABANDON allows the resource
to be abandoned rather than deleted. Possible values are: "ABANDON".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_shared_vpc_service_project#deletion_policy ComputeSharedVpcServiceProject#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_shared_vpc_service_project#id ComputeSharedVpcServiceProject#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectConfig.property.timeouts"></a>

```python
timeouts: ComputeSharedVpcServiceProjectTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeouts">ComputeSharedVpcServiceProjectTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_shared_vpc_service_project#timeouts ComputeSharedVpcServiceProject#timeouts}

---

### ComputeSharedVpcServiceProjectTimeouts <a name="ComputeSharedVpcServiceProjectTimeouts" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_shared_vpc_service_project

computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_shared_vpc_service_project#create ComputeSharedVpcServiceProject#create}. |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_shared_vpc_service_project#delete ComputeSharedVpcServiceProject#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_shared_vpc_service_project#create ComputeSharedVpcServiceProject#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/compute_shared_vpc_service_project#delete ComputeSharedVpcServiceProject#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeSharedVpcServiceProjectTimeoutsOutputReference <a name="ComputeSharedVpcServiceProjectTimeoutsOutputReference" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_shared_vpc_service_project

computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeouts">ComputeSharedVpcServiceProjectTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ComputeSharedVpcServiceProjectTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeouts">ComputeSharedVpcServiceProjectTimeouts</a>]

---



