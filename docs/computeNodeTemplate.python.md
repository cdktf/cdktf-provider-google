# `computeNodeTemplate` Submodule <a name="`computeNodeTemplate` Submodule" id="@cdktf/provider-google.computeNodeTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeNodeTemplate <a name="ComputeNodeTemplate" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/compute_node_template google_compute_node_template}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_node_template

computeNodeTemplate.ComputeNodeTemplate(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  accelerators: typing.Union[IResolvable, typing.List[ComputeNodeTemplateAccelerators]] = None,
  cpu_overcommit_type: str = None,
  description: str = None,
  id: str = None,
  name: str = None,
  node_affinity_labels: typing.Mapping[str] = None,
  node_type: str = None,
  node_type_flexibility: ComputeNodeTemplateNodeTypeFlexibility = None,
  project: str = None,
  region: str = None,
  server_binding: ComputeNodeTemplateServerBinding = None,
  timeouts: ComputeNodeTemplateTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.Initializer.parameter.accelerators">accelerators</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAccelerators">ComputeNodeTemplateAccelerators</a>]]</code> | accelerators block. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.Initializer.parameter.cpuOvercommitType">cpu_overcommit_type</a></code> | <code>str</code> | CPU overcommit. Default value: "NONE" Possible values: ["ENABLED", "NONE"]. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.Initializer.parameter.description">description</a></code> | <code>str</code> | An optional textual description of the resource. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/compute_node_template#id ComputeNodeTemplate#id}. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.Initializer.parameter.nodeAffinityLabels">node_affinity_labels</a></code> | <code>typing.Mapping[str]</code> | Labels to use for node affinity, which will be used in instance scheduling. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.Initializer.parameter.nodeType">node_type</a></code> | <code>str</code> | Node type to use for nodes group that are created from this template. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.Initializer.parameter.nodeTypeFlexibility">node_type_flexibility</a></code> | <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibility">ComputeNodeTemplateNodeTypeFlexibility</a></code> | node_type_flexibility block. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/compute_node_template#project ComputeNodeTemplate#project}. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where nodes using the node template will be created. If it is not provided, the provider region is used. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.Initializer.parameter.serverBinding">server_binding</a></code> | <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBinding">ComputeNodeTemplateServerBinding</a></code> | server_binding block. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeouts">ComputeNodeTemplateTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `accelerators`<sup>Optional</sup> <a name="accelerators" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.Initializer.parameter.accelerators"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAccelerators">ComputeNodeTemplateAccelerators</a>]]

accelerators block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/compute_node_template#accelerators ComputeNodeTemplate#accelerators}

---

##### `cpu_overcommit_type`<sup>Optional</sup> <a name="cpu_overcommit_type" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.Initializer.parameter.cpuOvercommitType"></a>

- *Type:* str

CPU overcommit. Default value: "NONE" Possible values: ["ENABLED", "NONE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/compute_node_template#cpu_overcommit_type ComputeNodeTemplate#cpu_overcommit_type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.Initializer.parameter.description"></a>

- *Type:* str

An optional textual description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/compute_node_template#description ComputeNodeTemplate#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/compute_node_template#id ComputeNodeTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.Initializer.parameter.name"></a>

- *Type:* str

Name of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/compute_node_template#name ComputeNodeTemplate#name}

---

##### `node_affinity_labels`<sup>Optional</sup> <a name="node_affinity_labels" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.Initializer.parameter.nodeAffinityLabels"></a>

- *Type:* typing.Mapping[str]

Labels to use for node affinity, which will be used in instance scheduling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/compute_node_template#node_affinity_labels ComputeNodeTemplate#node_affinity_labels}

---

##### `node_type`<sup>Optional</sup> <a name="node_type" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.Initializer.parameter.nodeType"></a>

- *Type:* str

Node type to use for nodes group that are created from this template.

Only one of nodeTypeFlexibility and nodeType can be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/compute_node_template#node_type ComputeNodeTemplate#node_type}

---

##### `node_type_flexibility`<sup>Optional</sup> <a name="node_type_flexibility" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.Initializer.parameter.nodeTypeFlexibility"></a>

- *Type:* <a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibility">ComputeNodeTemplateNodeTypeFlexibility</a>

node_type_flexibility block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/compute_node_template#node_type_flexibility ComputeNodeTemplate#node_type_flexibility}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/compute_node_template#project ComputeNodeTemplate#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.Initializer.parameter.region"></a>

- *Type:* str

Region where nodes using the node template will be created. If it is not provided, the provider region is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/compute_node_template#region ComputeNodeTemplate#region}

---

##### `server_binding`<sup>Optional</sup> <a name="server_binding" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.Initializer.parameter.serverBinding"></a>

- *Type:* <a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBinding">ComputeNodeTemplateServerBinding</a>

server_binding block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/compute_node_template#server_binding ComputeNodeTemplate#server_binding}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeouts">ComputeNodeTemplateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/compute_node_template#timeouts ComputeNodeTemplate#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.putAccelerators">put_accelerators</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.putNodeTypeFlexibility">put_node_type_flexibility</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.putServerBinding">put_server_binding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.resetAccelerators">reset_accelerators</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.resetCpuOvercommitType">reset_cpu_overcommit_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.resetNodeAffinityLabels">reset_node_affinity_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.resetNodeType">reset_node_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.resetNodeTypeFlexibility">reset_node_type_flexibility</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.resetServerBinding">reset_server_binding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_accelerators` <a name="put_accelerators" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.putAccelerators"></a>

```python
def put_accelerators(
  value: typing.Union[IResolvable, typing.List[ComputeNodeTemplateAccelerators]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.putAccelerators.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAccelerators">ComputeNodeTemplateAccelerators</a>]]

---

##### `put_node_type_flexibility` <a name="put_node_type_flexibility" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.putNodeTypeFlexibility"></a>

```python
def put_node_type_flexibility(
  cpus: str = None,
  memory: str = None
) -> None
```

###### `cpus`<sup>Optional</sup> <a name="cpus" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.putNodeTypeFlexibility.parameter.cpus"></a>

- *Type:* str

Number of virtual CPUs to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/compute_node_template#cpus ComputeNodeTemplate#cpus}

---

###### `memory`<sup>Optional</sup> <a name="memory" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.putNodeTypeFlexibility.parameter.memory"></a>

- *Type:* str

Physical memory available to the node, defined in MB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/compute_node_template#memory ComputeNodeTemplate#memory}

---

##### `put_server_binding` <a name="put_server_binding" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.putServerBinding"></a>

```python
def put_server_binding(
  type: str
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.putServerBinding.parameter.type"></a>

- *Type:* str

Type of server binding policy. If 'RESTART_NODE_ON_ANY_SERVER', nodes using this template will restart on any physical server following a maintenance event.

If 'RESTART_NODE_ON_MINIMAL_SERVER', nodes using this template
will restart on the same physical server following a maintenance
event, instead of being live migrated to or restarted on a new
physical server. This option may be useful if you are using
software licenses tied to the underlying server characteristics
such as physical sockets or cores, to avoid the need for
additional licenses when maintenance occurs. However, VMs on such
nodes will experience outages while maintenance is applied. Possible values: ["RESTART_NODE_ON_ANY_SERVER", "RESTART_NODE_ON_MINIMAL_SERVERS"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/compute_node_template#type ComputeNodeTemplate#type}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/compute_node_template#create ComputeNodeTemplate#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/compute_node_template#delete ComputeNodeTemplate#delete}.

---

##### `reset_accelerators` <a name="reset_accelerators" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.resetAccelerators"></a>

```python
def reset_accelerators() -> None
```

##### `reset_cpu_overcommit_type` <a name="reset_cpu_overcommit_type" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.resetCpuOvercommitType"></a>

```python
def reset_cpu_overcommit_type() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_node_affinity_labels` <a name="reset_node_affinity_labels" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.resetNodeAffinityLabels"></a>

```python
def reset_node_affinity_labels() -> None
```

##### `reset_node_type` <a name="reset_node_type" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.resetNodeType"></a>

```python
def reset_node_type() -> None
```

##### `reset_node_type_flexibility` <a name="reset_node_type_flexibility" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.resetNodeTypeFlexibility"></a>

```python
def reset_node_type_flexibility() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_server_binding` <a name="reset_server_binding" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.resetServerBinding"></a>

```python
def reset_server_binding() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ComputeNodeTemplate resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import compute_node_template

computeNodeTemplate.ComputeNodeTemplate.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import compute_node_template

computeNodeTemplate.ComputeNodeTemplate.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import compute_node_template

computeNodeTemplate.ComputeNodeTemplate.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import compute_node_template

computeNodeTemplate.ComputeNodeTemplate.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ComputeNodeTemplate resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ComputeNodeTemplate to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ComputeNodeTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/compute_node_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ComputeNodeTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.accelerators">accelerators</a></code> | <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsList">ComputeNodeTemplateAcceleratorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.creationTimestamp">creation_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.nodeTypeFlexibility">node_type_flexibility</a></code> | <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference">ComputeNodeTemplateNodeTypeFlexibilityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.selfLink">self_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.serverBinding">server_binding</a></code> | <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference">ComputeNodeTemplateServerBindingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference">ComputeNodeTemplateTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.acceleratorsInput">accelerators_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAccelerators">ComputeNodeTemplateAccelerators</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.cpuOvercommitTypeInput">cpu_overcommit_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.nodeAffinityLabelsInput">node_affinity_labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.nodeTypeFlexibilityInput">node_type_flexibility_input</a></code> | <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibility">ComputeNodeTemplateNodeTypeFlexibility</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.nodeTypeInput">node_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.serverBindingInput">server_binding_input</a></code> | <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBinding">ComputeNodeTemplateServerBinding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeouts">ComputeNodeTemplateTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.cpuOvercommitType">cpu_overcommit_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.nodeAffinityLabels">node_affinity_labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.nodeType">node_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.region">region</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `accelerators`<sup>Required</sup> <a name="accelerators" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.accelerators"></a>

```python
accelerators: ComputeNodeTemplateAcceleratorsList
```

- *Type:* <a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsList">ComputeNodeTemplateAcceleratorsList</a>

---

##### `creation_timestamp`<sup>Required</sup> <a name="creation_timestamp" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.creationTimestamp"></a>

```python
creation_timestamp: str
```

- *Type:* str

---

##### `node_type_flexibility`<sup>Required</sup> <a name="node_type_flexibility" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.nodeTypeFlexibility"></a>

```python
node_type_flexibility: ComputeNodeTemplateNodeTypeFlexibilityOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference">ComputeNodeTemplateNodeTypeFlexibilityOutputReference</a>

---

##### `self_link`<sup>Required</sup> <a name="self_link" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.selfLink"></a>

```python
self_link: str
```

- *Type:* str

---

##### `server_binding`<sup>Required</sup> <a name="server_binding" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.serverBinding"></a>

```python
server_binding: ComputeNodeTemplateServerBindingOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference">ComputeNodeTemplateServerBindingOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.timeouts"></a>

```python
timeouts: ComputeNodeTemplateTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference">ComputeNodeTemplateTimeoutsOutputReference</a>

---

##### `accelerators_input`<sup>Optional</sup> <a name="accelerators_input" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.acceleratorsInput"></a>

```python
accelerators_input: typing.Union[IResolvable, typing.List[ComputeNodeTemplateAccelerators]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAccelerators">ComputeNodeTemplateAccelerators</a>]]

---

##### `cpu_overcommit_type_input`<sup>Optional</sup> <a name="cpu_overcommit_type_input" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.cpuOvercommitTypeInput"></a>

```python
cpu_overcommit_type_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `node_affinity_labels_input`<sup>Optional</sup> <a name="node_affinity_labels_input" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.nodeAffinityLabelsInput"></a>

```python
node_affinity_labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `node_type_flexibility_input`<sup>Optional</sup> <a name="node_type_flexibility_input" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.nodeTypeFlexibilityInput"></a>

```python
node_type_flexibility_input: ComputeNodeTemplateNodeTypeFlexibility
```

- *Type:* <a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibility">ComputeNodeTemplateNodeTypeFlexibility</a>

---

##### `node_type_input`<sup>Optional</sup> <a name="node_type_input" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.nodeTypeInput"></a>

```python
node_type_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `server_binding_input`<sup>Optional</sup> <a name="server_binding_input" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.serverBindingInput"></a>

```python
server_binding_input: ComputeNodeTemplateServerBinding
```

- *Type:* <a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBinding">ComputeNodeTemplateServerBinding</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ComputeNodeTemplateTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeouts">ComputeNodeTemplateTimeouts</a>]

---

##### `cpu_overcommit_type`<sup>Required</sup> <a name="cpu_overcommit_type" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.cpuOvercommitType"></a>

```python
cpu_overcommit_type: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `node_affinity_labels`<sup>Required</sup> <a name="node_affinity_labels" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.nodeAffinityLabels"></a>

```python
node_affinity_labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `node_type`<sup>Required</sup> <a name="node_type" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.nodeType"></a>

```python
node_type: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.region"></a>

```python
region: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeNodeTemplateAccelerators <a name="ComputeNodeTemplateAccelerators" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAccelerators"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAccelerators.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_node_template

computeNodeTemplate.ComputeNodeTemplateAccelerators(
  accelerator_count: typing.Union[int, float] = None,
  accelerator_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAccelerators.property.acceleratorCount">accelerator_count</a></code> | <code>typing.Union[int, float]</code> | The number of the guest accelerator cards exposed to this node template. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAccelerators.property.acceleratorType">accelerator_type</a></code> | <code>str</code> | Full or partial URL of the accelerator type resource to expose to this node template. |

---

##### `accelerator_count`<sup>Optional</sup> <a name="accelerator_count" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAccelerators.property.acceleratorCount"></a>

```python
accelerator_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of the guest accelerator cards exposed to this node template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/compute_node_template#accelerator_count ComputeNodeTemplate#accelerator_count}

---

##### `accelerator_type`<sup>Optional</sup> <a name="accelerator_type" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAccelerators.property.acceleratorType"></a>

```python
accelerator_type: str
```

- *Type:* str

Full or partial URL of the accelerator type resource to expose to this node template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/compute_node_template#accelerator_type ComputeNodeTemplate#accelerator_type}

---

### ComputeNodeTemplateConfig <a name="ComputeNodeTemplateConfig" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_node_template

computeNodeTemplate.ComputeNodeTemplateConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  accelerators: typing.Union[IResolvable, typing.List[ComputeNodeTemplateAccelerators]] = None,
  cpu_overcommit_type: str = None,
  description: str = None,
  id: str = None,
  name: str = None,
  node_affinity_labels: typing.Mapping[str] = None,
  node_type: str = None,
  node_type_flexibility: ComputeNodeTemplateNodeTypeFlexibility = None,
  project: str = None,
  region: str = None,
  server_binding: ComputeNodeTemplateServerBinding = None,
  timeouts: ComputeNodeTemplateTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateConfig.property.accelerators">accelerators</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAccelerators">ComputeNodeTemplateAccelerators</a>]]</code> | accelerators block. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateConfig.property.cpuOvercommitType">cpu_overcommit_type</a></code> | <code>str</code> | CPU overcommit. Default value: "NONE" Possible values: ["ENABLED", "NONE"]. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateConfig.property.description">description</a></code> | <code>str</code> | An optional textual description of the resource. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/compute_node_template#id ComputeNodeTemplate#id}. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateConfig.property.name">name</a></code> | <code>str</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateConfig.property.nodeAffinityLabels">node_affinity_labels</a></code> | <code>typing.Mapping[str]</code> | Labels to use for node affinity, which will be used in instance scheduling. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateConfig.property.nodeType">node_type</a></code> | <code>str</code> | Node type to use for nodes group that are created from this template. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateConfig.property.nodeTypeFlexibility">node_type_flexibility</a></code> | <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibility">ComputeNodeTemplateNodeTypeFlexibility</a></code> | node_type_flexibility block. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/compute_node_template#project ComputeNodeTemplate#project}. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateConfig.property.region">region</a></code> | <code>str</code> | Region where nodes using the node template will be created. If it is not provided, the provider region is used. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateConfig.property.serverBinding">server_binding</a></code> | <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBinding">ComputeNodeTemplateServerBinding</a></code> | server_binding block. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeouts">ComputeNodeTemplateTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `accelerators`<sup>Optional</sup> <a name="accelerators" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateConfig.property.accelerators"></a>

```python
accelerators: typing.Union[IResolvable, typing.List[ComputeNodeTemplateAccelerators]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAccelerators">ComputeNodeTemplateAccelerators</a>]]

accelerators block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/compute_node_template#accelerators ComputeNodeTemplate#accelerators}

---

##### `cpu_overcommit_type`<sup>Optional</sup> <a name="cpu_overcommit_type" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateConfig.property.cpuOvercommitType"></a>

```python
cpu_overcommit_type: str
```

- *Type:* str

CPU overcommit. Default value: "NONE" Possible values: ["ENABLED", "NONE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/compute_node_template#cpu_overcommit_type ComputeNodeTemplate#cpu_overcommit_type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateConfig.property.description"></a>

```python
description: str
```

- *Type:* str

An optional textual description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/compute_node_template#description ComputeNodeTemplate#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/compute_node_template#id ComputeNodeTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/compute_node_template#name ComputeNodeTemplate#name}

---

##### `node_affinity_labels`<sup>Optional</sup> <a name="node_affinity_labels" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateConfig.property.nodeAffinityLabels"></a>

```python
node_affinity_labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Labels to use for node affinity, which will be used in instance scheduling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/compute_node_template#node_affinity_labels ComputeNodeTemplate#node_affinity_labels}

---

##### `node_type`<sup>Optional</sup> <a name="node_type" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateConfig.property.nodeType"></a>

```python
node_type: str
```

- *Type:* str

Node type to use for nodes group that are created from this template.

Only one of nodeTypeFlexibility and nodeType can be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/compute_node_template#node_type ComputeNodeTemplate#node_type}

---

##### `node_type_flexibility`<sup>Optional</sup> <a name="node_type_flexibility" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateConfig.property.nodeTypeFlexibility"></a>

```python
node_type_flexibility: ComputeNodeTemplateNodeTypeFlexibility
```

- *Type:* <a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibility">ComputeNodeTemplateNodeTypeFlexibility</a>

node_type_flexibility block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/compute_node_template#node_type_flexibility ComputeNodeTemplate#node_type_flexibility}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/compute_node_template#project ComputeNodeTemplate#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where nodes using the node template will be created. If it is not provided, the provider region is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/compute_node_template#region ComputeNodeTemplate#region}

---

##### `server_binding`<sup>Optional</sup> <a name="server_binding" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateConfig.property.serverBinding"></a>

```python
server_binding: ComputeNodeTemplateServerBinding
```

- *Type:* <a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBinding">ComputeNodeTemplateServerBinding</a>

server_binding block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/compute_node_template#server_binding ComputeNodeTemplate#server_binding}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateConfig.property.timeouts"></a>

```python
timeouts: ComputeNodeTemplateTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeouts">ComputeNodeTemplateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/compute_node_template#timeouts ComputeNodeTemplate#timeouts}

---

### ComputeNodeTemplateNodeTypeFlexibility <a name="ComputeNodeTemplateNodeTypeFlexibility" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibility"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibility.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_node_template

computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibility(
  cpus: str = None,
  memory: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibility.property.cpus">cpus</a></code> | <code>str</code> | Number of virtual CPUs to use. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibility.property.memory">memory</a></code> | <code>str</code> | Physical memory available to the node, defined in MB. |

---

##### `cpus`<sup>Optional</sup> <a name="cpus" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibility.property.cpus"></a>

```python
cpus: str
```

- *Type:* str

Number of virtual CPUs to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/compute_node_template#cpus ComputeNodeTemplate#cpus}

---

##### `memory`<sup>Optional</sup> <a name="memory" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibility.property.memory"></a>

```python
memory: str
```

- *Type:* str

Physical memory available to the node, defined in MB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/compute_node_template#memory ComputeNodeTemplate#memory}

---

### ComputeNodeTemplateServerBinding <a name="ComputeNodeTemplateServerBinding" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBinding"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBinding.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_node_template

computeNodeTemplate.ComputeNodeTemplateServerBinding(
  type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBinding.property.type">type</a></code> | <code>str</code> | Type of server binding policy. If 'RESTART_NODE_ON_ANY_SERVER', nodes using this template will restart on any physical server following a maintenance event. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBinding.property.type"></a>

```python
type: str
```

- *Type:* str

Type of server binding policy. If 'RESTART_NODE_ON_ANY_SERVER', nodes using this template will restart on any physical server following a maintenance event.

If 'RESTART_NODE_ON_MINIMAL_SERVER', nodes using this template
will restart on the same physical server following a maintenance
event, instead of being live migrated to or restarted on a new
physical server. This option may be useful if you are using
software licenses tied to the underlying server characteristics
such as physical sockets or cores, to avoid the need for
additional licenses when maintenance occurs. However, VMs on such
nodes will experience outages while maintenance is applied. Possible values: ["RESTART_NODE_ON_ANY_SERVER", "RESTART_NODE_ON_MINIMAL_SERVERS"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/compute_node_template#type ComputeNodeTemplate#type}

---

### ComputeNodeTemplateTimeouts <a name="ComputeNodeTemplateTimeouts" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_node_template

computeNodeTemplate.ComputeNodeTemplateTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/compute_node_template#create ComputeNodeTemplate#create}. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/compute_node_template#delete ComputeNodeTemplate#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/compute_node_template#create ComputeNodeTemplate#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/compute_node_template#delete ComputeNodeTemplate#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeNodeTemplateAcceleratorsList <a name="ComputeNodeTemplateAcceleratorsList" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_node_template

computeNodeTemplate.ComputeNodeTemplateAcceleratorsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ComputeNodeTemplateAcceleratorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAccelerators">ComputeNodeTemplateAccelerators</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ComputeNodeTemplateAccelerators]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAccelerators">ComputeNodeTemplateAccelerators</a>]]

---


### ComputeNodeTemplateAcceleratorsOutputReference <a name="ComputeNodeTemplateAcceleratorsOutputReference" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_node_template

computeNodeTemplate.ComputeNodeTemplateAcceleratorsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsOutputReference.resetAcceleratorCount">reset_accelerator_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsOutputReference.resetAcceleratorType">reset_accelerator_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_accelerator_count` <a name="reset_accelerator_count" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsOutputReference.resetAcceleratorCount"></a>

```python
def reset_accelerator_count() -> None
```

##### `reset_accelerator_type` <a name="reset_accelerator_type" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsOutputReference.resetAcceleratorType"></a>

```python
def reset_accelerator_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsOutputReference.property.acceleratorCountInput">accelerator_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsOutputReference.property.acceleratorTypeInput">accelerator_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsOutputReference.property.acceleratorCount">accelerator_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsOutputReference.property.acceleratorType">accelerator_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAccelerators">ComputeNodeTemplateAccelerators</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `accelerator_count_input`<sup>Optional</sup> <a name="accelerator_count_input" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsOutputReference.property.acceleratorCountInput"></a>

```python
accelerator_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `accelerator_type_input`<sup>Optional</sup> <a name="accelerator_type_input" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsOutputReference.property.acceleratorTypeInput"></a>

```python
accelerator_type_input: str
```

- *Type:* str

---

##### `accelerator_count`<sup>Required</sup> <a name="accelerator_count" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsOutputReference.property.acceleratorCount"></a>

```python
accelerator_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `accelerator_type`<sup>Required</sup> <a name="accelerator_type" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsOutputReference.property.acceleratorType"></a>

```python
accelerator_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAcceleratorsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ComputeNodeTemplateAccelerators]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateAccelerators">ComputeNodeTemplateAccelerators</a>]

---


### ComputeNodeTemplateNodeTypeFlexibilityOutputReference <a name="ComputeNodeTemplateNodeTypeFlexibilityOutputReference" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_node_template

computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.resetCpus">reset_cpus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.resetMemory">reset_memory</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cpus` <a name="reset_cpus" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.resetCpus"></a>

```python
def reset_cpus() -> None
```

##### `reset_memory` <a name="reset_memory" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.resetMemory"></a>

```python
def reset_memory() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.property.localSsd">local_ssd</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.property.cpusInput">cpus_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.property.memoryInput">memory_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.property.cpus">cpus</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.property.memory">memory</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibility">ComputeNodeTemplateNodeTypeFlexibility</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `local_ssd`<sup>Required</sup> <a name="local_ssd" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.property.localSsd"></a>

```python
local_ssd: str
```

- *Type:* str

---

##### `cpus_input`<sup>Optional</sup> <a name="cpus_input" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.property.cpusInput"></a>

```python
cpus_input: str
```

- *Type:* str

---

##### `memory_input`<sup>Optional</sup> <a name="memory_input" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.property.memoryInput"></a>

```python
memory_input: str
```

- *Type:* str

---

##### `cpus`<sup>Required</sup> <a name="cpus" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.property.cpus"></a>

```python
cpus: str
```

- *Type:* str

---

##### `memory`<sup>Required</sup> <a name="memory" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.property.memory"></a>

```python
memory: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.property.internalValue"></a>

```python
internal_value: ComputeNodeTemplateNodeTypeFlexibility
```

- *Type:* <a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibility">ComputeNodeTemplateNodeTypeFlexibility</a>

---


### ComputeNodeTemplateServerBindingOutputReference <a name="ComputeNodeTemplateServerBindingOutputReference" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_node_template

computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBinding">ComputeNodeTemplateServerBinding</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.property.internalValue"></a>

```python
internal_value: ComputeNodeTemplateServerBinding
```

- *Type:* <a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBinding">ComputeNodeTemplateServerBinding</a>

---


### ComputeNodeTemplateTimeoutsOutputReference <a name="ComputeNodeTemplateTimeoutsOutputReference" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_node_template

computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeouts">ComputeNodeTemplateTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ComputeNodeTemplateTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeouts">ComputeNodeTemplateTimeouts</a>]

---



