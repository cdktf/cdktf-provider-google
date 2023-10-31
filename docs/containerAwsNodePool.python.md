# `google_container_aws_node_pool`

Refer to the Terraform Registory for docs: [`google_container_aws_node_pool`](https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/container_aws_node_pool).

# `containerAwsNodePool` Submodule <a name="`containerAwsNodePool` Submodule" id="@cdktf/provider-google.containerAwsNodePool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ContainerAwsNodePool <a name="ContainerAwsNodePool" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/container_aws_node_pool google_container_aws_node_pool}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_aws_node_pool

containerAwsNodePool.ContainerAwsNodePool(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  autoscaling: ContainerAwsNodePoolAutoscaling,
  cluster: str,
  config: ContainerAwsNodePoolConfigA,
  location: str,
  max_pods_constraint: ContainerAwsNodePoolMaxPodsConstraint,
  name: str,
  subnet_id: str,
  version: str,
  annotations: typing.Mapping[str] = None,
  id: str = None,
  management: ContainerAwsNodePoolManagement = None,
  project: str = None,
  timeouts: ContainerAwsNodePoolTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.Initializer.parameter.autoscaling">autoscaling</a></code> | <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolAutoscaling">ContainerAwsNodePoolAutoscaling</a></code> | autoscaling block. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.Initializer.parameter.cluster">cluster</a></code> | <code>str</code> | The awsCluster for the resource. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigA">ContainerAwsNodePoolConfigA</a></code> | config block. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.Initializer.parameter.location">location</a></code> | <code>str</code> | The location for the resource. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.Initializer.parameter.maxPodsConstraint">max_pods_constraint</a></code> | <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolMaxPodsConstraint">ContainerAwsNodePoolMaxPodsConstraint</a></code> | max_pods_constraint block. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of this resource. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.Initializer.parameter.subnetId">subnet_id</a></code> | <code>str</code> | The subnet where the node pool node run. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.Initializer.parameter.version">version</a></code> | <code>str</code> | The Kubernetes version to run on this node pool (e.g. `1.19.10-gke.1000`). You can list all supported versions on a given Google Cloud region by calling GetAwsServerConfig. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.Initializer.parameter.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | Optional. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/container_aws_node_pool#id ContainerAwsNodePool#id}. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.Initializer.parameter.management">management</a></code> | <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolManagement">ContainerAwsNodePoolManagement</a></code> | management block. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.Initializer.parameter.project">project</a></code> | <code>str</code> | The project for the resource. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolTimeouts">ContainerAwsNodePoolTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `autoscaling`<sup>Required</sup> <a name="autoscaling" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.Initializer.parameter.autoscaling"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolAutoscaling">ContainerAwsNodePoolAutoscaling</a>

autoscaling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/container_aws_node_pool#autoscaling ContainerAwsNodePool#autoscaling}

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.Initializer.parameter.cluster"></a>

- *Type:* str

The awsCluster for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/container_aws_node_pool#cluster ContainerAwsNodePool#cluster}

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigA">ContainerAwsNodePoolConfigA</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/container_aws_node_pool#config ContainerAwsNodePool#config}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.Initializer.parameter.location"></a>

- *Type:* str

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/container_aws_node_pool#location ContainerAwsNodePool#location}

---

##### `max_pods_constraint`<sup>Required</sup> <a name="max_pods_constraint" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.Initializer.parameter.maxPodsConstraint"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolMaxPodsConstraint">ContainerAwsNodePoolMaxPodsConstraint</a>

max_pods_constraint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/container_aws_node_pool#max_pods_constraint ContainerAwsNodePool#max_pods_constraint}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.Initializer.parameter.name"></a>

- *Type:* str

The name of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/container_aws_node_pool#name ContainerAwsNodePool#name}

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.Initializer.parameter.subnetId"></a>

- *Type:* str

The subnet where the node pool node run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/container_aws_node_pool#subnet_id ContainerAwsNodePool#subnet_id}

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.Initializer.parameter.version"></a>

- *Type:* str

The Kubernetes version to run on this node pool (e.g. `1.19.10-gke.1000`). You can list all supported versions on a given Google Cloud region by calling GetAwsServerConfig.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/container_aws_node_pool#version ContainerAwsNodePool#version}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.Initializer.parameter.annotations"></a>

- *Type:* typing.Mapping[str]

Optional.

Annotations on the node pool. This field has the same restrictions as Kubernetes annotations. The total size of all keys and values combined is limited to 256k. Key can have 2 segments: prefix (optional) and name (required), separated by a slash (/). Prefix must be a DNS subdomain. Name must be 63 characters or less, begin and end with alphanumerics, with dashes (-), underscores (_), dots (.), and alphanumerics between.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field `effective_annotations` for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/container_aws_node_pool#annotations ContainerAwsNodePool#annotations}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/container_aws_node_pool#id ContainerAwsNodePool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `management`<sup>Optional</sup> <a name="management" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.Initializer.parameter.management"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolManagement">ContainerAwsNodePoolManagement</a>

management block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/container_aws_node_pool#management ContainerAwsNodePool#management}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.Initializer.parameter.project"></a>

- *Type:* str

The project for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/container_aws_node_pool#project ContainerAwsNodePool#project}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolTimeouts">ContainerAwsNodePoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/container_aws_node_pool#timeouts ContainerAwsNodePool#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.putAutoscaling">put_autoscaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.putConfig">put_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.putManagement">put_management</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.putMaxPodsConstraint">put_max_pods_constraint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.resetAnnotations">reset_annotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.resetManagement">reset_management</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `import_from` <a name="import_from" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `put_autoscaling` <a name="put_autoscaling" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.putAutoscaling"></a>

```python
def put_autoscaling(
  max_node_count: typing.Union[int, float],
  min_node_count: typing.Union[int, float]
) -> None
```

###### `max_node_count`<sup>Required</sup> <a name="max_node_count" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.putAutoscaling.parameter.maxNodeCount"></a>

- *Type:* typing.Union[int, float]

Maximum number of nodes in the NodePool. Must be >= min_node_count.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/container_aws_node_pool#max_node_count ContainerAwsNodePool#max_node_count}

---

###### `min_node_count`<sup>Required</sup> <a name="min_node_count" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.putAutoscaling.parameter.minNodeCount"></a>

- *Type:* typing.Union[int, float]

Minimum number of nodes in the NodePool. Must be >= 1 and <= max_node_count.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/container_aws_node_pool#min_node_count ContainerAwsNodePool#min_node_count}

---

##### `put_config` <a name="put_config" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.putConfig"></a>

```python
def put_config(
  config_encryption: ContainerAwsNodePoolConfigConfigEncryption,
  iam_instance_profile: str,
  autoscaling_metrics_collection: ContainerAwsNodePoolConfigAutoscalingMetricsCollection = None,
  instance_type: str = None,
  labels: typing.Mapping[str] = None,
  proxy_config: ContainerAwsNodePoolConfigProxyConfig = None,
  root_volume: ContainerAwsNodePoolConfigRootVolume = None,
  security_group_ids: typing.List[str] = None,
  ssh_config: ContainerAwsNodePoolConfigSshConfig = None,
  tags: typing.Mapping[str] = None,
  taints: typing.Union[IResolvable, typing.List[ContainerAwsNodePoolConfigTaints]] = None
) -> None
```

###### `config_encryption`<sup>Required</sup> <a name="config_encryption" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.putConfig.parameter.configEncryption"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigConfigEncryption">ContainerAwsNodePoolConfigConfigEncryption</a>

config_encryption block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/container_aws_node_pool#config_encryption ContainerAwsNodePool#config_encryption}

---

###### `iam_instance_profile`<sup>Required</sup> <a name="iam_instance_profile" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.putConfig.parameter.iamInstanceProfile"></a>

- *Type:* str

The name of the AWS IAM role assigned to nodes in the pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/container_aws_node_pool#iam_instance_profile ContainerAwsNodePool#iam_instance_profile}

---

###### `autoscaling_metrics_collection`<sup>Optional</sup> <a name="autoscaling_metrics_collection" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.putConfig.parameter.autoscalingMetricsCollection"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAutoscalingMetricsCollection">ContainerAwsNodePoolConfigAutoscalingMetricsCollection</a>

autoscaling_metrics_collection block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/container_aws_node_pool#autoscaling_metrics_collection ContainerAwsNodePool#autoscaling_metrics_collection}

---

###### `instance_type`<sup>Optional</sup> <a name="instance_type" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.putConfig.parameter.instanceType"></a>

- *Type:* str

Optional. The AWS instance type. When unspecified, it defaults to `m5.large`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/container_aws_node_pool#instance_type ContainerAwsNodePool#instance_type}

---

###### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.putConfig.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Optional.

The initial labels assigned to nodes of this node pool. An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/container_aws_node_pool#labels ContainerAwsNodePool#labels}

---

###### `proxy_config`<sup>Optional</sup> <a name="proxy_config" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.putConfig.parameter.proxyConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigProxyConfig">ContainerAwsNodePoolConfigProxyConfig</a>

proxy_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/container_aws_node_pool#proxy_config ContainerAwsNodePool#proxy_config}

---

###### `root_volume`<sup>Optional</sup> <a name="root_volume" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.putConfig.parameter.rootVolume"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolume">ContainerAwsNodePoolConfigRootVolume</a>

root_volume block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/container_aws_node_pool#root_volume ContainerAwsNodePool#root_volume}

---

###### `security_group_ids`<sup>Optional</sup> <a name="security_group_ids" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.putConfig.parameter.securityGroupIds"></a>

- *Type:* typing.List[str]

Optional.

The IDs of additional security groups to add to nodes in this pool. The manager will automatically create security groups with minimum rules needed for a functioning cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/container_aws_node_pool#security_group_ids ContainerAwsNodePool#security_group_ids}

---

###### `ssh_config`<sup>Optional</sup> <a name="ssh_config" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.putConfig.parameter.sshConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigSshConfig">ContainerAwsNodePoolConfigSshConfig</a>

ssh_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/container_aws_node_pool#ssh_config ContainerAwsNodePool#ssh_config}

---

###### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.putConfig.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Optional.

Key/value metadata to assign to each underlying AWS resource. Specify at most 50 pairs containing alphanumerics, spaces, and symbols (.+-=_:@/). Keys can be up to 127 Unicode characters. Values can be up to 255 Unicode characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/container_aws_node_pool#tags ContainerAwsNodePool#tags}

---

###### `taints`<sup>Optional</sup> <a name="taints" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.putConfig.parameter.taints"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaints">ContainerAwsNodePoolConfigTaints</a>]]

taints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/container_aws_node_pool#taints ContainerAwsNodePool#taints}

---

##### `put_management` <a name="put_management" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.putManagement"></a>

```python
def put_management(
  auto_repair: typing.Union[bool, IResolvable] = None
) -> None
```

###### `auto_repair`<sup>Optional</sup> <a name="auto_repair" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.putManagement.parameter.autoRepair"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Optional. Whether or not the nodes will be automatically repaired.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/container_aws_node_pool#auto_repair ContainerAwsNodePool#auto_repair}

---

##### `put_max_pods_constraint` <a name="put_max_pods_constraint" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.putMaxPodsConstraint"></a>

```python
def put_max_pods_constraint(
  max_pods_per_node: typing.Union[int, float]
) -> None
```

###### `max_pods_per_node`<sup>Required</sup> <a name="max_pods_per_node" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.putMaxPodsConstraint.parameter.maxPodsPerNode"></a>

- *Type:* typing.Union[int, float]

The maximum number of pods to schedule on a single node.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/container_aws_node_pool#max_pods_per_node ContainerAwsNodePool#max_pods_per_node}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/container_aws_node_pool#create ContainerAwsNodePool#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/container_aws_node_pool#delete ContainerAwsNodePool#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/container_aws_node_pool#update ContainerAwsNodePool#update}.

---

##### `reset_annotations` <a name="reset_annotations" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.resetAnnotations"></a>

```python
def reset_annotations() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_management` <a name="reset_management" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.resetManagement"></a>

```python
def reset_management() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ContainerAwsNodePool resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import container_aws_node_pool

containerAwsNodePool.ContainerAwsNodePool.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import container_aws_node_pool

containerAwsNodePool.ContainerAwsNodePool.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import container_aws_node_pool

containerAwsNodePool.ContainerAwsNodePool.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import container_aws_node_pool

containerAwsNodePool.ContainerAwsNodePool.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ContainerAwsNodePool resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ContainerAwsNodePool to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ContainerAwsNodePool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/container_aws_node_pool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ContainerAwsNodePool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.autoscaling">autoscaling</a></code> | <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolAutoscalingOutputReference">ContainerAwsNodePoolAutoscalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.config">config</a></code> | <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference">ContainerAwsNodePoolConfigAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.effectiveAnnotations">effective_annotations</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.management">management</a></code> | <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolManagementOutputReference">ContainerAwsNodePoolManagementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.maxPodsConstraint">max_pods_constraint</a></code> | <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolMaxPodsConstraintOutputReference">ContainerAwsNodePoolMaxPodsConstraintOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.reconciling">reconciling</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolTimeoutsOutputReference">ContainerAwsNodePoolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.annotationsInput">annotations_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.autoscalingInput">autoscaling_input</a></code> | <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolAutoscaling">ContainerAwsNodePoolAutoscaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.clusterInput">cluster_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.configInput">config_input</a></code> | <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigA">ContainerAwsNodePoolConfigA</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.managementInput">management_input</a></code> | <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolManagement">ContainerAwsNodePoolManagement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.maxPodsConstraintInput">max_pods_constraint_input</a></code> | <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolMaxPodsConstraint">ContainerAwsNodePoolMaxPodsConstraint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.subnetIdInput">subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolTimeouts">ContainerAwsNodePoolTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.cluster">cluster</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.version">version</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `autoscaling`<sup>Required</sup> <a name="autoscaling" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.autoscaling"></a>

```python
autoscaling: ContainerAwsNodePoolAutoscalingOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolAutoscalingOutputReference">ContainerAwsNodePoolAutoscalingOutputReference</a>

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.config"></a>

```python
config: ContainerAwsNodePoolConfigAOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference">ContainerAwsNodePoolConfigAOutputReference</a>

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `effective_annotations`<sup>Required</sup> <a name="effective_annotations" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.effectiveAnnotations"></a>

```python
effective_annotations: StringMap
```

- *Type:* cdktf.StringMap

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `management`<sup>Required</sup> <a name="management" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.management"></a>

```python
management: ContainerAwsNodePoolManagementOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolManagementOutputReference">ContainerAwsNodePoolManagementOutputReference</a>

---

##### `max_pods_constraint`<sup>Required</sup> <a name="max_pods_constraint" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.maxPodsConstraint"></a>

```python
max_pods_constraint: ContainerAwsNodePoolMaxPodsConstraintOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolMaxPodsConstraintOutputReference">ContainerAwsNodePoolMaxPodsConstraintOutputReference</a>

---

##### `reconciling`<sup>Required</sup> <a name="reconciling" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.reconciling"></a>

```python
reconciling: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.timeouts"></a>

```python
timeouts: ContainerAwsNodePoolTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolTimeoutsOutputReference">ContainerAwsNodePoolTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `annotations_input`<sup>Optional</sup> <a name="annotations_input" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.annotationsInput"></a>

```python
annotations_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `autoscaling_input`<sup>Optional</sup> <a name="autoscaling_input" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.autoscalingInput"></a>

```python
autoscaling_input: ContainerAwsNodePoolAutoscaling
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolAutoscaling">ContainerAwsNodePoolAutoscaling</a>

---

##### `cluster_input`<sup>Optional</sup> <a name="cluster_input" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.clusterInput"></a>

```python
cluster_input: str
```

- *Type:* str

---

##### `config_input`<sup>Optional</sup> <a name="config_input" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.configInput"></a>

```python
config_input: ContainerAwsNodePoolConfigA
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigA">ContainerAwsNodePoolConfigA</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `management_input`<sup>Optional</sup> <a name="management_input" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.managementInput"></a>

```python
management_input: ContainerAwsNodePoolManagement
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolManagement">ContainerAwsNodePoolManagement</a>

---

##### `max_pods_constraint_input`<sup>Optional</sup> <a name="max_pods_constraint_input" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.maxPodsConstraintInput"></a>

```python
max_pods_constraint_input: ContainerAwsNodePoolMaxPodsConstraint
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolMaxPodsConstraint">ContainerAwsNodePoolMaxPodsConstraint</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `subnet_id_input`<sup>Optional</sup> <a name="subnet_id_input" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.subnetIdInput"></a>

```python
subnet_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ContainerAwsNodePoolTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolTimeouts">ContainerAwsNodePoolTimeouts</a>]

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.cluster"></a>

```python
cluster: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.version"></a>

```python
version: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePool.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ContainerAwsNodePoolAutoscaling <a name="ContainerAwsNodePoolAutoscaling" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolAutoscaling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolAutoscaling.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_aws_node_pool

containerAwsNodePool.ContainerAwsNodePoolAutoscaling(
  max_node_count: typing.Union[int, float],
  min_node_count: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolAutoscaling.property.maxNodeCount">max_node_count</a></code> | <code>typing.Union[int, float]</code> | Maximum number of nodes in the NodePool. Must be >= min_node_count. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolAutoscaling.property.minNodeCount">min_node_count</a></code> | <code>typing.Union[int, float]</code> | Minimum number of nodes in the NodePool. Must be >= 1 and <= max_node_count. |

---

##### `max_node_count`<sup>Required</sup> <a name="max_node_count" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolAutoscaling.property.maxNodeCount"></a>

```python
max_node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum number of nodes in the NodePool. Must be >= min_node_count.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/container_aws_node_pool#max_node_count ContainerAwsNodePool#max_node_count}

---

##### `min_node_count`<sup>Required</sup> <a name="min_node_count" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolAutoscaling.property.minNodeCount"></a>

```python
min_node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Minimum number of nodes in the NodePool. Must be >= 1 and <= max_node_count.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/container_aws_node_pool#min_node_count ContainerAwsNodePool#min_node_count}

---

### ContainerAwsNodePoolConfig <a name="ContainerAwsNodePoolConfig" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_aws_node_pool

containerAwsNodePool.ContainerAwsNodePoolConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  autoscaling: ContainerAwsNodePoolAutoscaling,
  cluster: str,
  config: ContainerAwsNodePoolConfigA,
  location: str,
  max_pods_constraint: ContainerAwsNodePoolMaxPodsConstraint,
  name: str,
  subnet_id: str,
  version: str,
  annotations: typing.Mapping[str] = None,
  id: str = None,
  management: ContainerAwsNodePoolManagement = None,
  project: str = None,
  timeouts: ContainerAwsNodePoolTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfig.property.autoscaling">autoscaling</a></code> | <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolAutoscaling">ContainerAwsNodePoolAutoscaling</a></code> | autoscaling block. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfig.property.cluster">cluster</a></code> | <code>str</code> | The awsCluster for the resource. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfig.property.config">config</a></code> | <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigA">ContainerAwsNodePoolConfigA</a></code> | config block. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfig.property.location">location</a></code> | <code>str</code> | The location for the resource. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfig.property.maxPodsConstraint">max_pods_constraint</a></code> | <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolMaxPodsConstraint">ContainerAwsNodePoolMaxPodsConstraint</a></code> | max_pods_constraint block. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfig.property.name">name</a></code> | <code>str</code> | The name of this resource. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfig.property.subnetId">subnet_id</a></code> | <code>str</code> | The subnet where the node pool node run. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfig.property.version">version</a></code> | <code>str</code> | The Kubernetes version to run on this node pool (e.g. `1.19.10-gke.1000`). You can list all supported versions on a given Google Cloud region by calling GetAwsServerConfig. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfig.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | Optional. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/container_aws_node_pool#id ContainerAwsNodePool#id}. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfig.property.management">management</a></code> | <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolManagement">ContainerAwsNodePoolManagement</a></code> | management block. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfig.property.project">project</a></code> | <code>str</code> | The project for the resource. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolTimeouts">ContainerAwsNodePoolTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `autoscaling`<sup>Required</sup> <a name="autoscaling" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfig.property.autoscaling"></a>

```python
autoscaling: ContainerAwsNodePoolAutoscaling
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolAutoscaling">ContainerAwsNodePoolAutoscaling</a>

autoscaling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/container_aws_node_pool#autoscaling ContainerAwsNodePool#autoscaling}

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfig.property.cluster"></a>

```python
cluster: str
```

- *Type:* str

The awsCluster for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/container_aws_node_pool#cluster ContainerAwsNodePool#cluster}

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfig.property.config"></a>

```python
config: ContainerAwsNodePoolConfigA
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigA">ContainerAwsNodePoolConfigA</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/container_aws_node_pool#config ContainerAwsNodePool#config}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/container_aws_node_pool#location ContainerAwsNodePool#location}

---

##### `max_pods_constraint`<sup>Required</sup> <a name="max_pods_constraint" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfig.property.maxPodsConstraint"></a>

```python
max_pods_constraint: ContainerAwsNodePoolMaxPodsConstraint
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolMaxPodsConstraint">ContainerAwsNodePoolMaxPodsConstraint</a>

max_pods_constraint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/container_aws_node_pool#max_pods_constraint ContainerAwsNodePool#max_pods_constraint}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/container_aws_node_pool#name ContainerAwsNodePool#name}

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfig.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

The subnet where the node pool node run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/container_aws_node_pool#subnet_id ContainerAwsNodePool#subnet_id}

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfig.property.version"></a>

```python
version: str
```

- *Type:* str

The Kubernetes version to run on this node pool (e.g. `1.19.10-gke.1000`). You can list all supported versions on a given Google Cloud region by calling GetAwsServerConfig.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/container_aws_node_pool#version ContainerAwsNodePool#version}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfig.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Optional.

Annotations on the node pool. This field has the same restrictions as Kubernetes annotations. The total size of all keys and values combined is limited to 256k. Key can have 2 segments: prefix (optional) and name (required), separated by a slash (/). Prefix must be a DNS subdomain. Name must be 63 characters or less, begin and end with alphanumerics, with dashes (-), underscores (_), dots (.), and alphanumerics between.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field `effective_annotations` for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/container_aws_node_pool#annotations ContainerAwsNodePool#annotations}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/container_aws_node_pool#id ContainerAwsNodePool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `management`<sup>Optional</sup> <a name="management" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfig.property.management"></a>

```python
management: ContainerAwsNodePoolManagement
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolManagement">ContainerAwsNodePoolManagement</a>

management block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/container_aws_node_pool#management ContainerAwsNodePool#management}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfig.property.project"></a>

```python
project: str
```

- *Type:* str

The project for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/container_aws_node_pool#project ContainerAwsNodePool#project}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfig.property.timeouts"></a>

```python
timeouts: ContainerAwsNodePoolTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolTimeouts">ContainerAwsNodePoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/container_aws_node_pool#timeouts ContainerAwsNodePool#timeouts}

---

### ContainerAwsNodePoolConfigA <a name="ContainerAwsNodePoolConfigA" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigA.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_aws_node_pool

containerAwsNodePool.ContainerAwsNodePoolConfigA(
  config_encryption: ContainerAwsNodePoolConfigConfigEncryption,
  iam_instance_profile: str,
  autoscaling_metrics_collection: ContainerAwsNodePoolConfigAutoscalingMetricsCollection = None,
  instance_type: str = None,
  labels: typing.Mapping[str] = None,
  proxy_config: ContainerAwsNodePoolConfigProxyConfig = None,
  root_volume: ContainerAwsNodePoolConfigRootVolume = None,
  security_group_ids: typing.List[str] = None,
  ssh_config: ContainerAwsNodePoolConfigSshConfig = None,
  tags: typing.Mapping[str] = None,
  taints: typing.Union[IResolvable, typing.List[ContainerAwsNodePoolConfigTaints]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigA.property.configEncryption">config_encryption</a></code> | <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigConfigEncryption">ContainerAwsNodePoolConfigConfigEncryption</a></code> | config_encryption block. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigA.property.iamInstanceProfile">iam_instance_profile</a></code> | <code>str</code> | The name of the AWS IAM role assigned to nodes in the pool. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigA.property.autoscalingMetricsCollection">autoscaling_metrics_collection</a></code> | <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAutoscalingMetricsCollection">ContainerAwsNodePoolConfigAutoscalingMetricsCollection</a></code> | autoscaling_metrics_collection block. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigA.property.instanceType">instance_type</a></code> | <code>str</code> | Optional. The AWS instance type. When unspecified, it defaults to `m5.large`. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigA.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Optional. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigA.property.proxyConfig">proxy_config</a></code> | <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigProxyConfig">ContainerAwsNodePoolConfigProxyConfig</a></code> | proxy_config block. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigA.property.rootVolume">root_volume</a></code> | <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolume">ContainerAwsNodePoolConfigRootVolume</a></code> | root_volume block. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigA.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | Optional. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigA.property.sshConfig">ssh_config</a></code> | <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigSshConfig">ContainerAwsNodePoolConfigSshConfig</a></code> | ssh_config block. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigA.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Optional. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigA.property.taints">taints</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaints">ContainerAwsNodePoolConfigTaints</a>]]</code> | taints block. |

---

##### `config_encryption`<sup>Required</sup> <a name="config_encryption" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigA.property.configEncryption"></a>

```python
config_encryption: ContainerAwsNodePoolConfigConfigEncryption
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigConfigEncryption">ContainerAwsNodePoolConfigConfigEncryption</a>

config_encryption block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/container_aws_node_pool#config_encryption ContainerAwsNodePool#config_encryption}

---

##### `iam_instance_profile`<sup>Required</sup> <a name="iam_instance_profile" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigA.property.iamInstanceProfile"></a>

```python
iam_instance_profile: str
```

- *Type:* str

The name of the AWS IAM role assigned to nodes in the pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/container_aws_node_pool#iam_instance_profile ContainerAwsNodePool#iam_instance_profile}

---

##### `autoscaling_metrics_collection`<sup>Optional</sup> <a name="autoscaling_metrics_collection" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigA.property.autoscalingMetricsCollection"></a>

```python
autoscaling_metrics_collection: ContainerAwsNodePoolConfigAutoscalingMetricsCollection
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAutoscalingMetricsCollection">ContainerAwsNodePoolConfigAutoscalingMetricsCollection</a>

autoscaling_metrics_collection block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/container_aws_node_pool#autoscaling_metrics_collection ContainerAwsNodePool#autoscaling_metrics_collection}

---

##### `instance_type`<sup>Optional</sup> <a name="instance_type" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigA.property.instanceType"></a>

```python
instance_type: str
```

- *Type:* str

Optional. The AWS instance type. When unspecified, it defaults to `m5.large`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/container_aws_node_pool#instance_type ContainerAwsNodePool#instance_type}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigA.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Optional.

The initial labels assigned to nodes of this node pool. An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/container_aws_node_pool#labels ContainerAwsNodePool#labels}

---

##### `proxy_config`<sup>Optional</sup> <a name="proxy_config" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigA.property.proxyConfig"></a>

```python
proxy_config: ContainerAwsNodePoolConfigProxyConfig
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigProxyConfig">ContainerAwsNodePoolConfigProxyConfig</a>

proxy_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/container_aws_node_pool#proxy_config ContainerAwsNodePool#proxy_config}

---

##### `root_volume`<sup>Optional</sup> <a name="root_volume" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigA.property.rootVolume"></a>

```python
root_volume: ContainerAwsNodePoolConfigRootVolume
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolume">ContainerAwsNodePoolConfigRootVolume</a>

root_volume block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/container_aws_node_pool#root_volume ContainerAwsNodePool#root_volume}

---

##### `security_group_ids`<sup>Optional</sup> <a name="security_group_ids" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigA.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

Optional.

The IDs of additional security groups to add to nodes in this pool. The manager will automatically create security groups with minimum rules needed for a functioning cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/container_aws_node_pool#security_group_ids ContainerAwsNodePool#security_group_ids}

---

##### `ssh_config`<sup>Optional</sup> <a name="ssh_config" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigA.property.sshConfig"></a>

```python
ssh_config: ContainerAwsNodePoolConfigSshConfig
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigSshConfig">ContainerAwsNodePoolConfigSshConfig</a>

ssh_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/container_aws_node_pool#ssh_config ContainerAwsNodePool#ssh_config}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigA.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Optional.

Key/value metadata to assign to each underlying AWS resource. Specify at most 50 pairs containing alphanumerics, spaces, and symbols (.+-=_:@/). Keys can be up to 127 Unicode characters. Values can be up to 255 Unicode characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/container_aws_node_pool#tags ContainerAwsNodePool#tags}

---

##### `taints`<sup>Optional</sup> <a name="taints" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigA.property.taints"></a>

```python
taints: typing.Union[IResolvable, typing.List[ContainerAwsNodePoolConfigTaints]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaints">ContainerAwsNodePoolConfigTaints</a>]]

taints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/container_aws_node_pool#taints ContainerAwsNodePool#taints}

---

### ContainerAwsNodePoolConfigAutoscalingMetricsCollection <a name="ContainerAwsNodePoolConfigAutoscalingMetricsCollection" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAutoscalingMetricsCollection"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAutoscalingMetricsCollection.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_aws_node_pool

containerAwsNodePool.ContainerAwsNodePoolConfigAutoscalingMetricsCollection(
  granularity: str,
  metrics: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAutoscalingMetricsCollection.property.granularity">granularity</a></code> | <code>str</code> | The frequency at which EC2 Auto Scaling sends aggregated data to AWS CloudWatch. The only valid value is "1Minute". |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAutoscalingMetricsCollection.property.metrics">metrics</a></code> | <code>typing.List[str]</code> | The metrics to enable. |

---

##### `granularity`<sup>Required</sup> <a name="granularity" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAutoscalingMetricsCollection.property.granularity"></a>

```python
granularity: str
```

- *Type:* str

The frequency at which EC2 Auto Scaling sends aggregated data to AWS CloudWatch. The only valid value is "1Minute".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/container_aws_node_pool#granularity ContainerAwsNodePool#granularity}

---

##### `metrics`<sup>Optional</sup> <a name="metrics" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAutoscalingMetricsCollection.property.metrics"></a>

```python
metrics: typing.List[str]
```

- *Type:* typing.List[str]

The metrics to enable.

For a list of valid metrics, see https://docs.aws.amazon.com/autoscaling/ec2/APIReference/API_EnableMetricsCollection.html. If you specify granularity and don't specify any metrics, all metrics are enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/container_aws_node_pool#metrics ContainerAwsNodePool#metrics}

---

### ContainerAwsNodePoolConfigConfigEncryption <a name="ContainerAwsNodePoolConfigConfigEncryption" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigConfigEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigConfigEncryption.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_aws_node_pool

containerAwsNodePool.ContainerAwsNodePoolConfigConfigEncryption(
  kms_key_arn: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigConfigEncryption.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | The ARN of the AWS KMS key used to encrypt node pool configuration. |

---

##### `kms_key_arn`<sup>Required</sup> <a name="kms_key_arn" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigConfigEncryption.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

The ARN of the AWS KMS key used to encrypt node pool configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/container_aws_node_pool#kms_key_arn ContainerAwsNodePool#kms_key_arn}

---

### ContainerAwsNodePoolConfigProxyConfig <a name="ContainerAwsNodePoolConfigProxyConfig" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigProxyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigProxyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_aws_node_pool

containerAwsNodePool.ContainerAwsNodePoolConfigProxyConfig(
  secret_arn: str,
  secret_version: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigProxyConfig.property.secretArn">secret_arn</a></code> | <code>str</code> | The ARN of the AWS Secret Manager secret that contains the HTTP(S) proxy configuration. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigProxyConfig.property.secretVersion">secret_version</a></code> | <code>str</code> | The version string of the AWS Secret Manager secret that contains the HTTP(S) proxy configuration. |

---

##### `secret_arn`<sup>Required</sup> <a name="secret_arn" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigProxyConfig.property.secretArn"></a>

```python
secret_arn: str
```

- *Type:* str

The ARN of the AWS Secret Manager secret that contains the HTTP(S) proxy configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/container_aws_node_pool#secret_arn ContainerAwsNodePool#secret_arn}

---

##### `secret_version`<sup>Required</sup> <a name="secret_version" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigProxyConfig.property.secretVersion"></a>

```python
secret_version: str
```

- *Type:* str

The version string of the AWS Secret Manager secret that contains the HTTP(S) proxy configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/container_aws_node_pool#secret_version ContainerAwsNodePool#secret_version}

---

### ContainerAwsNodePoolConfigRootVolume <a name="ContainerAwsNodePoolConfigRootVolume" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolume"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolume.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_aws_node_pool

containerAwsNodePool.ContainerAwsNodePoolConfigRootVolume(
  iops: typing.Union[int, float] = None,
  kms_key_arn: str = None,
  size_gib: typing.Union[int, float] = None,
  throughput: typing.Union[int, float] = None,
  volume_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolume.property.iops">iops</a></code> | <code>typing.Union[int, float]</code> | Optional. The number of I/O operations per second (IOPS) to provision for GP3 volume. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolume.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | Optional. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolume.property.sizeGib">size_gib</a></code> | <code>typing.Union[int, float]</code> | Optional. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolume.property.throughput">throughput</a></code> | <code>typing.Union[int, float]</code> | Optional. The throughput to provision for the volume, in MiB/s. Only valid if the volume type is GP3. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolume.property.volumeType">volume_type</a></code> | <code>str</code> | Optional. Type of the EBS volume. When unspecified, it defaults to GP2 volume. Possible values: VOLUME_TYPE_UNSPECIFIED, GP2, GP3. |

---

##### `iops`<sup>Optional</sup> <a name="iops" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolume.property.iops"></a>

```python
iops: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Optional. The number of I/O operations per second (IOPS) to provision for GP3 volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/container_aws_node_pool#iops ContainerAwsNodePool#iops}

---

##### `kms_key_arn`<sup>Optional</sup> <a name="kms_key_arn" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolume.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

Optional.

The Amazon Resource Name (ARN) of the Customer Managed Key (CMK) used to encrypt AWS EBS volumes. If not specified, the default Amazon managed key associated to the AWS region where this cluster runs will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/container_aws_node_pool#kms_key_arn ContainerAwsNodePool#kms_key_arn}

---

##### `size_gib`<sup>Optional</sup> <a name="size_gib" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolume.property.sizeGib"></a>

```python
size_gib: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Optional.

The size of the volume, in GiBs. When unspecified, a default value is provided. See the specific reference in the parent resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/container_aws_node_pool#size_gib ContainerAwsNodePool#size_gib}

---

##### `throughput`<sup>Optional</sup> <a name="throughput" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolume.property.throughput"></a>

```python
throughput: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Optional. The throughput to provision for the volume, in MiB/s. Only valid if the volume type is GP3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/container_aws_node_pool#throughput ContainerAwsNodePool#throughput}

---

##### `volume_type`<sup>Optional</sup> <a name="volume_type" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolume.property.volumeType"></a>

```python
volume_type: str
```

- *Type:* str

Optional. Type of the EBS volume. When unspecified, it defaults to GP2 volume. Possible values: VOLUME_TYPE_UNSPECIFIED, GP2, GP3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/container_aws_node_pool#volume_type ContainerAwsNodePool#volume_type}

---

### ContainerAwsNodePoolConfigSshConfig <a name="ContainerAwsNodePoolConfigSshConfig" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigSshConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigSshConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_aws_node_pool

containerAwsNodePool.ContainerAwsNodePoolConfigSshConfig(
  ec2_key_pair: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigSshConfig.property.ec2KeyPair">ec2_key_pair</a></code> | <code>str</code> | The name of the EC2 key pair used to login into cluster machines. |

---

##### `ec2_key_pair`<sup>Required</sup> <a name="ec2_key_pair" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigSshConfig.property.ec2KeyPair"></a>

```python
ec2_key_pair: str
```

- *Type:* str

The name of the EC2 key pair used to login into cluster machines.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/container_aws_node_pool#ec2_key_pair ContainerAwsNodePool#ec2_key_pair}

---

### ContainerAwsNodePoolConfigTaints <a name="ContainerAwsNodePoolConfigTaints" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaints.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_aws_node_pool

containerAwsNodePool.ContainerAwsNodePoolConfigTaints(
  effect: str,
  key: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaints.property.effect">effect</a></code> | <code>str</code> | The taint effect. Possible values: EFFECT_UNSPECIFIED, NO_SCHEDULE, PREFER_NO_SCHEDULE, NO_EXECUTE. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaints.property.key">key</a></code> | <code>str</code> | Key for the taint. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaints.property.value">value</a></code> | <code>str</code> | Value for the taint. |

---

##### `effect`<sup>Required</sup> <a name="effect" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaints.property.effect"></a>

```python
effect: str
```

- *Type:* str

The taint effect. Possible values: EFFECT_UNSPECIFIED, NO_SCHEDULE, PREFER_NO_SCHEDULE, NO_EXECUTE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/container_aws_node_pool#effect ContainerAwsNodePool#effect}

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaints.property.key"></a>

```python
key: str
```

- *Type:* str

Key for the taint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/container_aws_node_pool#key ContainerAwsNodePool#key}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaints.property.value"></a>

```python
value: str
```

- *Type:* str

Value for the taint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/container_aws_node_pool#value ContainerAwsNodePool#value}

---

### ContainerAwsNodePoolManagement <a name="ContainerAwsNodePoolManagement" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolManagement"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolManagement.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_aws_node_pool

containerAwsNodePool.ContainerAwsNodePoolManagement(
  auto_repair: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolManagement.property.autoRepair">auto_repair</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Optional. Whether or not the nodes will be automatically repaired. |

---

##### `auto_repair`<sup>Optional</sup> <a name="auto_repair" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolManagement.property.autoRepair"></a>

```python
auto_repair: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Optional. Whether or not the nodes will be automatically repaired.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/container_aws_node_pool#auto_repair ContainerAwsNodePool#auto_repair}

---

### ContainerAwsNodePoolMaxPodsConstraint <a name="ContainerAwsNodePoolMaxPodsConstraint" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolMaxPodsConstraint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolMaxPodsConstraint.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_aws_node_pool

containerAwsNodePool.ContainerAwsNodePoolMaxPodsConstraint(
  max_pods_per_node: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolMaxPodsConstraint.property.maxPodsPerNode">max_pods_per_node</a></code> | <code>typing.Union[int, float]</code> | The maximum number of pods to schedule on a single node. |

---

##### `max_pods_per_node`<sup>Required</sup> <a name="max_pods_per_node" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolMaxPodsConstraint.property.maxPodsPerNode"></a>

```python
max_pods_per_node: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum number of pods to schedule on a single node.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/container_aws_node_pool#max_pods_per_node ContainerAwsNodePool#max_pods_per_node}

---

### ContainerAwsNodePoolTimeouts <a name="ContainerAwsNodePoolTimeouts" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_aws_node_pool

containerAwsNodePool.ContainerAwsNodePoolTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/container_aws_node_pool#create ContainerAwsNodePool#create}. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/container_aws_node_pool#delete ContainerAwsNodePool#delete}. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/container_aws_node_pool#update ContainerAwsNodePool#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/container_aws_node_pool#create ContainerAwsNodePool#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/container_aws_node_pool#delete ContainerAwsNodePool#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/container_aws_node_pool#update ContainerAwsNodePool#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ContainerAwsNodePoolAutoscalingOutputReference <a name="ContainerAwsNodePoolAutoscalingOutputReference" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolAutoscalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolAutoscalingOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_aws_node_pool

containerAwsNodePool.ContainerAwsNodePoolAutoscalingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolAutoscalingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolAutoscalingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolAutoscalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolAutoscalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolAutoscalingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolAutoscalingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolAutoscalingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolAutoscalingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolAutoscalingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolAutoscalingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolAutoscalingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolAutoscalingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolAutoscalingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolAutoscalingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolAutoscalingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolAutoscalingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolAutoscalingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolAutoscalingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolAutoscalingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolAutoscalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolAutoscalingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolAutoscalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolAutoscalingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolAutoscalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolAutoscalingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolAutoscalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolAutoscalingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolAutoscalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolAutoscalingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolAutoscalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolAutoscalingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolAutoscalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolAutoscalingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolAutoscalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolAutoscalingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolAutoscalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolAutoscalingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolAutoscalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolAutoscalingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolAutoscalingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolAutoscalingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolAutoscalingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolAutoscalingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolAutoscalingOutputReference.property.maxNodeCountInput">max_node_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolAutoscalingOutputReference.property.minNodeCountInput">min_node_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolAutoscalingOutputReference.property.maxNodeCount">max_node_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolAutoscalingOutputReference.property.minNodeCount">min_node_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolAutoscalingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolAutoscaling">ContainerAwsNodePoolAutoscaling</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolAutoscalingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolAutoscalingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_node_count_input`<sup>Optional</sup> <a name="max_node_count_input" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolAutoscalingOutputReference.property.maxNodeCountInput"></a>

```python
max_node_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_node_count_input`<sup>Optional</sup> <a name="min_node_count_input" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolAutoscalingOutputReference.property.minNodeCountInput"></a>

```python
min_node_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_node_count`<sup>Required</sup> <a name="max_node_count" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolAutoscalingOutputReference.property.maxNodeCount"></a>

```python
max_node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_node_count`<sup>Required</sup> <a name="min_node_count" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolAutoscalingOutputReference.property.minNodeCount"></a>

```python
min_node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolAutoscalingOutputReference.property.internalValue"></a>

```python
internal_value: ContainerAwsNodePoolAutoscaling
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolAutoscaling">ContainerAwsNodePoolAutoscaling</a>

---


### ContainerAwsNodePoolConfigAOutputReference <a name="ContainerAwsNodePoolConfigAOutputReference" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_aws_node_pool

containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.putAutoscalingMetricsCollection">put_autoscaling_metrics_collection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.putConfigEncryption">put_config_encryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.putProxyConfig">put_proxy_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.putRootVolume">put_root_volume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.putSshConfig">put_ssh_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.putTaints">put_taints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.resetAutoscalingMetricsCollection">reset_autoscaling_metrics_collection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.resetInstanceType">reset_instance_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.resetProxyConfig">reset_proxy_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.resetRootVolume">reset_root_volume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.resetSecurityGroupIds">reset_security_group_ids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.resetSshConfig">reset_ssh_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.resetTaints">reset_taints</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_autoscaling_metrics_collection` <a name="put_autoscaling_metrics_collection" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.putAutoscalingMetricsCollection"></a>

```python
def put_autoscaling_metrics_collection(
  granularity: str,
  metrics: typing.List[str] = None
) -> None
```

###### `granularity`<sup>Required</sup> <a name="granularity" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.putAutoscalingMetricsCollection.parameter.granularity"></a>

- *Type:* str

The frequency at which EC2 Auto Scaling sends aggregated data to AWS CloudWatch. The only valid value is "1Minute".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/container_aws_node_pool#granularity ContainerAwsNodePool#granularity}

---

###### `metrics`<sup>Optional</sup> <a name="metrics" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.putAutoscalingMetricsCollection.parameter.metrics"></a>

- *Type:* typing.List[str]

The metrics to enable.

For a list of valid metrics, see https://docs.aws.amazon.com/autoscaling/ec2/APIReference/API_EnableMetricsCollection.html. If you specify granularity and don't specify any metrics, all metrics are enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/container_aws_node_pool#metrics ContainerAwsNodePool#metrics}

---

##### `put_config_encryption` <a name="put_config_encryption" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.putConfigEncryption"></a>

```python
def put_config_encryption(
  kms_key_arn: str
) -> None
```

###### `kms_key_arn`<sup>Required</sup> <a name="kms_key_arn" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.putConfigEncryption.parameter.kmsKeyArn"></a>

- *Type:* str

The ARN of the AWS KMS key used to encrypt node pool configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/container_aws_node_pool#kms_key_arn ContainerAwsNodePool#kms_key_arn}

---

##### `put_proxy_config` <a name="put_proxy_config" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.putProxyConfig"></a>

```python
def put_proxy_config(
  secret_arn: str,
  secret_version: str
) -> None
```

###### `secret_arn`<sup>Required</sup> <a name="secret_arn" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.putProxyConfig.parameter.secretArn"></a>

- *Type:* str

The ARN of the AWS Secret Manager secret that contains the HTTP(S) proxy configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/container_aws_node_pool#secret_arn ContainerAwsNodePool#secret_arn}

---

###### `secret_version`<sup>Required</sup> <a name="secret_version" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.putProxyConfig.parameter.secretVersion"></a>

- *Type:* str

The version string of the AWS Secret Manager secret that contains the HTTP(S) proxy configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/container_aws_node_pool#secret_version ContainerAwsNodePool#secret_version}

---

##### `put_root_volume` <a name="put_root_volume" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.putRootVolume"></a>

```python
def put_root_volume(
  iops: typing.Union[int, float] = None,
  kms_key_arn: str = None,
  size_gib: typing.Union[int, float] = None,
  throughput: typing.Union[int, float] = None,
  volume_type: str = None
) -> None
```

###### `iops`<sup>Optional</sup> <a name="iops" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.putRootVolume.parameter.iops"></a>

- *Type:* typing.Union[int, float]

Optional. The number of I/O operations per second (IOPS) to provision for GP3 volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/container_aws_node_pool#iops ContainerAwsNodePool#iops}

---

###### `kms_key_arn`<sup>Optional</sup> <a name="kms_key_arn" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.putRootVolume.parameter.kmsKeyArn"></a>

- *Type:* str

Optional.

The Amazon Resource Name (ARN) of the Customer Managed Key (CMK) used to encrypt AWS EBS volumes. If not specified, the default Amazon managed key associated to the AWS region where this cluster runs will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/container_aws_node_pool#kms_key_arn ContainerAwsNodePool#kms_key_arn}

---

###### `size_gib`<sup>Optional</sup> <a name="size_gib" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.putRootVolume.parameter.sizeGib"></a>

- *Type:* typing.Union[int, float]

Optional.

The size of the volume, in GiBs. When unspecified, a default value is provided. See the specific reference in the parent resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/container_aws_node_pool#size_gib ContainerAwsNodePool#size_gib}

---

###### `throughput`<sup>Optional</sup> <a name="throughput" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.putRootVolume.parameter.throughput"></a>

- *Type:* typing.Union[int, float]

Optional. The throughput to provision for the volume, in MiB/s. Only valid if the volume type is GP3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/container_aws_node_pool#throughput ContainerAwsNodePool#throughput}

---

###### `volume_type`<sup>Optional</sup> <a name="volume_type" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.putRootVolume.parameter.volumeType"></a>

- *Type:* str

Optional. Type of the EBS volume. When unspecified, it defaults to GP2 volume. Possible values: VOLUME_TYPE_UNSPECIFIED, GP2, GP3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/container_aws_node_pool#volume_type ContainerAwsNodePool#volume_type}

---

##### `put_ssh_config` <a name="put_ssh_config" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.putSshConfig"></a>

```python
def put_ssh_config(
  ec2_key_pair: str
) -> None
```

###### `ec2_key_pair`<sup>Required</sup> <a name="ec2_key_pair" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.putSshConfig.parameter.ec2KeyPair"></a>

- *Type:* str

The name of the EC2 key pair used to login into cluster machines.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/container_aws_node_pool#ec2_key_pair ContainerAwsNodePool#ec2_key_pair}

---

##### `put_taints` <a name="put_taints" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.putTaints"></a>

```python
def put_taints(
  value: typing.Union[IResolvable, typing.List[ContainerAwsNodePoolConfigTaints]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.putTaints.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaints">ContainerAwsNodePoolConfigTaints</a>]]

---

##### `reset_autoscaling_metrics_collection` <a name="reset_autoscaling_metrics_collection" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.resetAutoscalingMetricsCollection"></a>

```python
def reset_autoscaling_metrics_collection() -> None
```

##### `reset_instance_type` <a name="reset_instance_type" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.resetInstanceType"></a>

```python
def reset_instance_type() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_proxy_config` <a name="reset_proxy_config" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.resetProxyConfig"></a>

```python
def reset_proxy_config() -> None
```

##### `reset_root_volume` <a name="reset_root_volume" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.resetRootVolume"></a>

```python
def reset_root_volume() -> None
```

##### `reset_security_group_ids` <a name="reset_security_group_ids" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.resetSecurityGroupIds"></a>

```python
def reset_security_group_ids() -> None
```

##### `reset_ssh_config` <a name="reset_ssh_config" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.resetSshConfig"></a>

```python
def reset_ssh_config() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_taints` <a name="reset_taints" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.resetTaints"></a>

```python
def reset_taints() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.property.autoscalingMetricsCollection">autoscaling_metrics_collection</a></code> | <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference">ContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.property.configEncryption">config_encryption</a></code> | <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigConfigEncryptionOutputReference">ContainerAwsNodePoolConfigConfigEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.property.proxyConfig">proxy_config</a></code> | <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigProxyConfigOutputReference">ContainerAwsNodePoolConfigProxyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.property.rootVolume">root_volume</a></code> | <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolumeOutputReference">ContainerAwsNodePoolConfigRootVolumeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.property.sshConfig">ssh_config</a></code> | <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigSshConfigOutputReference">ContainerAwsNodePoolConfigSshConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.property.taints">taints</a></code> | <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsList">ContainerAwsNodePoolConfigTaintsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.property.autoscalingMetricsCollectionInput">autoscaling_metrics_collection_input</a></code> | <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAutoscalingMetricsCollection">ContainerAwsNodePoolConfigAutoscalingMetricsCollection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.property.configEncryptionInput">config_encryption_input</a></code> | <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigConfigEncryption">ContainerAwsNodePoolConfigConfigEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.property.iamInstanceProfileInput">iam_instance_profile_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.property.instanceTypeInput">instance_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.property.proxyConfigInput">proxy_config_input</a></code> | <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigProxyConfig">ContainerAwsNodePoolConfigProxyConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.property.rootVolumeInput">root_volume_input</a></code> | <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolume">ContainerAwsNodePoolConfigRootVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.property.securityGroupIdsInput">security_group_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.property.sshConfigInput">ssh_config_input</a></code> | <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigSshConfig">ContainerAwsNodePoolConfigSshConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.property.taintsInput">taints_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaints">ContainerAwsNodePoolConfigTaints</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.property.iamInstanceProfile">iam_instance_profile</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.property.instanceType">instance_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigA">ContainerAwsNodePoolConfigA</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `autoscaling_metrics_collection`<sup>Required</sup> <a name="autoscaling_metrics_collection" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.property.autoscalingMetricsCollection"></a>

```python
autoscaling_metrics_collection: ContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference">ContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference</a>

---

##### `config_encryption`<sup>Required</sup> <a name="config_encryption" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.property.configEncryption"></a>

```python
config_encryption: ContainerAwsNodePoolConfigConfigEncryptionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigConfigEncryptionOutputReference">ContainerAwsNodePoolConfigConfigEncryptionOutputReference</a>

---

##### `proxy_config`<sup>Required</sup> <a name="proxy_config" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.property.proxyConfig"></a>

```python
proxy_config: ContainerAwsNodePoolConfigProxyConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigProxyConfigOutputReference">ContainerAwsNodePoolConfigProxyConfigOutputReference</a>

---

##### `root_volume`<sup>Required</sup> <a name="root_volume" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.property.rootVolume"></a>

```python
root_volume: ContainerAwsNodePoolConfigRootVolumeOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolumeOutputReference">ContainerAwsNodePoolConfigRootVolumeOutputReference</a>

---

##### `ssh_config`<sup>Required</sup> <a name="ssh_config" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.property.sshConfig"></a>

```python
ssh_config: ContainerAwsNodePoolConfigSshConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigSshConfigOutputReference">ContainerAwsNodePoolConfigSshConfigOutputReference</a>

---

##### `taints`<sup>Required</sup> <a name="taints" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.property.taints"></a>

```python
taints: ContainerAwsNodePoolConfigTaintsList
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsList">ContainerAwsNodePoolConfigTaintsList</a>

---

##### `autoscaling_metrics_collection_input`<sup>Optional</sup> <a name="autoscaling_metrics_collection_input" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.property.autoscalingMetricsCollectionInput"></a>

```python
autoscaling_metrics_collection_input: ContainerAwsNodePoolConfigAutoscalingMetricsCollection
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAutoscalingMetricsCollection">ContainerAwsNodePoolConfigAutoscalingMetricsCollection</a>

---

##### `config_encryption_input`<sup>Optional</sup> <a name="config_encryption_input" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.property.configEncryptionInput"></a>

```python
config_encryption_input: ContainerAwsNodePoolConfigConfigEncryption
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigConfigEncryption">ContainerAwsNodePoolConfigConfigEncryption</a>

---

##### `iam_instance_profile_input`<sup>Optional</sup> <a name="iam_instance_profile_input" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.property.iamInstanceProfileInput"></a>

```python
iam_instance_profile_input: str
```

- *Type:* str

---

##### `instance_type_input`<sup>Optional</sup> <a name="instance_type_input" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.property.instanceTypeInput"></a>

```python
instance_type_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `proxy_config_input`<sup>Optional</sup> <a name="proxy_config_input" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.property.proxyConfigInput"></a>

```python
proxy_config_input: ContainerAwsNodePoolConfigProxyConfig
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigProxyConfig">ContainerAwsNodePoolConfigProxyConfig</a>

---

##### `root_volume_input`<sup>Optional</sup> <a name="root_volume_input" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.property.rootVolumeInput"></a>

```python
root_volume_input: ContainerAwsNodePoolConfigRootVolume
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolume">ContainerAwsNodePoolConfigRootVolume</a>

---

##### `security_group_ids_input`<sup>Optional</sup> <a name="security_group_ids_input" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.property.securityGroupIdsInput"></a>

```python
security_group_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ssh_config_input`<sup>Optional</sup> <a name="ssh_config_input" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.property.sshConfigInput"></a>

```python
ssh_config_input: ContainerAwsNodePoolConfigSshConfig
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigSshConfig">ContainerAwsNodePoolConfigSshConfig</a>

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `taints_input`<sup>Optional</sup> <a name="taints_input" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.property.taintsInput"></a>

```python
taints_input: typing.Union[IResolvable, typing.List[ContainerAwsNodePoolConfigTaints]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaints">ContainerAwsNodePoolConfigTaints</a>]]

---

##### `iam_instance_profile`<sup>Required</sup> <a name="iam_instance_profile" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.property.iamInstanceProfile"></a>

```python
iam_instance_profile: str
```

- *Type:* str

---

##### `instance_type`<sup>Required</sup> <a name="instance_type" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.property.instanceType"></a>

```python
instance_type: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `security_group_ids`<sup>Required</sup> <a name="security_group_ids" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAOutputReference.property.internalValue"></a>

```python
internal_value: ContainerAwsNodePoolConfigA
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigA">ContainerAwsNodePoolConfigA</a>

---


### ContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference <a name="ContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_aws_node_pool

containerAwsNodePool.ContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.resetMetrics">reset_metrics</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_metrics` <a name="reset_metrics" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.resetMetrics"></a>

```python
def reset_metrics() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.property.granularityInput">granularity_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.property.metricsInput">metrics_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.property.granularity">granularity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.property.metrics">metrics</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAutoscalingMetricsCollection">ContainerAwsNodePoolConfigAutoscalingMetricsCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `granularity_input`<sup>Optional</sup> <a name="granularity_input" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.property.granularityInput"></a>

```python
granularity_input: str
```

- *Type:* str

---

##### `metrics_input`<sup>Optional</sup> <a name="metrics_input" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.property.metricsInput"></a>

```python
metrics_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `granularity`<sup>Required</sup> <a name="granularity" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.property.granularity"></a>

```python
granularity: str
```

- *Type:* str

---

##### `metrics`<sup>Required</sup> <a name="metrics" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.property.metrics"></a>

```python
metrics: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAutoscalingMetricsCollectionOutputReference.property.internalValue"></a>

```python
internal_value: ContainerAwsNodePoolConfigAutoscalingMetricsCollection
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigAutoscalingMetricsCollection">ContainerAwsNodePoolConfigAutoscalingMetricsCollection</a>

---


### ContainerAwsNodePoolConfigConfigEncryptionOutputReference <a name="ContainerAwsNodePoolConfigConfigEncryptionOutputReference" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigConfigEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigConfigEncryptionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_aws_node_pool

containerAwsNodePool.ContainerAwsNodePoolConfigConfigEncryptionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigConfigEncryptionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigConfigEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigConfigEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigConfigEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigConfigEncryptionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigConfigEncryptionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigConfigEncryptionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigConfigEncryptionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigConfigEncryptionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigConfigEncryptionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigConfigEncryptionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigConfigEncryptionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigConfigEncryptionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigConfigEncryptionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigConfigEncryptionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigConfigEncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigConfigEncryptionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigConfigEncryptionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigConfigEncryptionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigConfigEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigConfigEncryptionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigConfigEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigConfigEncryptionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigConfigEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigConfigEncryptionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigConfigEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigConfigEncryptionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigConfigEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigConfigEncryptionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigConfigEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigConfigEncryptionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigConfigEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigConfigEncryptionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigConfigEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigConfigEncryptionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigConfigEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigConfigEncryptionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigConfigEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigConfigEncryptionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigConfigEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigConfigEncryptionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigConfigEncryptionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigConfigEncryptionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigConfigEncryptionOutputReference.property.kmsKeyArnInput">kms_key_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigConfigEncryptionOutputReference.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigConfigEncryptionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigConfigEncryption">ContainerAwsNodePoolConfigConfigEncryption</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigConfigEncryptionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigConfigEncryptionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kms_key_arn_input`<sup>Optional</sup> <a name="kms_key_arn_input" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigConfigEncryptionOutputReference.property.kmsKeyArnInput"></a>

```python
kms_key_arn_input: str
```

- *Type:* str

---

##### `kms_key_arn`<sup>Required</sup> <a name="kms_key_arn" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigConfigEncryptionOutputReference.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigConfigEncryptionOutputReference.property.internalValue"></a>

```python
internal_value: ContainerAwsNodePoolConfigConfigEncryption
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigConfigEncryption">ContainerAwsNodePoolConfigConfigEncryption</a>

---


### ContainerAwsNodePoolConfigProxyConfigOutputReference <a name="ContainerAwsNodePoolConfigProxyConfigOutputReference" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigProxyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigProxyConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_aws_node_pool

containerAwsNodePool.ContainerAwsNodePoolConfigProxyConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigProxyConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigProxyConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigProxyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigProxyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigProxyConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigProxyConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigProxyConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigProxyConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigProxyConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigProxyConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigProxyConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigProxyConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigProxyConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigProxyConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigProxyConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigProxyConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigProxyConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigProxyConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigProxyConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigProxyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigProxyConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigProxyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigProxyConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigProxyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigProxyConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigProxyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigProxyConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigProxyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigProxyConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigProxyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigProxyConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigProxyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigProxyConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigProxyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigProxyConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigProxyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigProxyConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigProxyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigProxyConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigProxyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigProxyConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigProxyConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigProxyConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigProxyConfigOutputReference.property.secretArnInput">secret_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigProxyConfigOutputReference.property.secretVersionInput">secret_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigProxyConfigOutputReference.property.secretArn">secret_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigProxyConfigOutputReference.property.secretVersion">secret_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigProxyConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigProxyConfig">ContainerAwsNodePoolConfigProxyConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigProxyConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigProxyConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `secret_arn_input`<sup>Optional</sup> <a name="secret_arn_input" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigProxyConfigOutputReference.property.secretArnInput"></a>

```python
secret_arn_input: str
```

- *Type:* str

---

##### `secret_version_input`<sup>Optional</sup> <a name="secret_version_input" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigProxyConfigOutputReference.property.secretVersionInput"></a>

```python
secret_version_input: str
```

- *Type:* str

---

##### `secret_arn`<sup>Required</sup> <a name="secret_arn" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigProxyConfigOutputReference.property.secretArn"></a>

```python
secret_arn: str
```

- *Type:* str

---

##### `secret_version`<sup>Required</sup> <a name="secret_version" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigProxyConfigOutputReference.property.secretVersion"></a>

```python
secret_version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigProxyConfigOutputReference.property.internalValue"></a>

```python
internal_value: ContainerAwsNodePoolConfigProxyConfig
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigProxyConfig">ContainerAwsNodePoolConfigProxyConfig</a>

---


### ContainerAwsNodePoolConfigRootVolumeOutputReference <a name="ContainerAwsNodePoolConfigRootVolumeOutputReference" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolumeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolumeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_aws_node_pool

containerAwsNodePool.ContainerAwsNodePoolConfigRootVolumeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolumeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolumeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolumeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolumeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolumeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolumeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolumeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolumeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolumeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolumeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolumeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolumeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolumeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolumeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolumeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolumeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolumeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolumeOutputReference.resetIops">reset_iops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolumeOutputReference.resetKmsKeyArn">reset_kms_key_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolumeOutputReference.resetSizeGib">reset_size_gib</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolumeOutputReference.resetThroughput">reset_throughput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolumeOutputReference.resetVolumeType">reset_volume_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolumeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolumeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolumeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolumeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolumeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolumeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolumeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolumeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolumeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolumeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolumeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolumeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolumeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolumeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolumeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolumeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolumeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolumeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolumeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolumeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolumeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolumeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolumeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolumeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_iops` <a name="reset_iops" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolumeOutputReference.resetIops"></a>

```python
def reset_iops() -> None
```

##### `reset_kms_key_arn` <a name="reset_kms_key_arn" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolumeOutputReference.resetKmsKeyArn"></a>

```python
def reset_kms_key_arn() -> None
```

##### `reset_size_gib` <a name="reset_size_gib" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolumeOutputReference.resetSizeGib"></a>

```python
def reset_size_gib() -> None
```

##### `reset_throughput` <a name="reset_throughput" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolumeOutputReference.resetThroughput"></a>

```python
def reset_throughput() -> None
```

##### `reset_volume_type` <a name="reset_volume_type" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolumeOutputReference.resetVolumeType"></a>

```python
def reset_volume_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolumeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolumeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolumeOutputReference.property.iopsInput">iops_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolumeOutputReference.property.kmsKeyArnInput">kms_key_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolumeOutputReference.property.sizeGibInput">size_gib_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolumeOutputReference.property.throughputInput">throughput_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolumeOutputReference.property.volumeTypeInput">volume_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolumeOutputReference.property.iops">iops</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolumeOutputReference.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolumeOutputReference.property.sizeGib">size_gib</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolumeOutputReference.property.throughput">throughput</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolumeOutputReference.property.volumeType">volume_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolumeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolume">ContainerAwsNodePoolConfigRootVolume</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolumeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolumeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `iops_input`<sup>Optional</sup> <a name="iops_input" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolumeOutputReference.property.iopsInput"></a>

```python
iops_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `kms_key_arn_input`<sup>Optional</sup> <a name="kms_key_arn_input" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolumeOutputReference.property.kmsKeyArnInput"></a>

```python
kms_key_arn_input: str
```

- *Type:* str

---

##### `size_gib_input`<sup>Optional</sup> <a name="size_gib_input" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolumeOutputReference.property.sizeGibInput"></a>

```python
size_gib_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `throughput_input`<sup>Optional</sup> <a name="throughput_input" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolumeOutputReference.property.throughputInput"></a>

```python
throughput_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `volume_type_input`<sup>Optional</sup> <a name="volume_type_input" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolumeOutputReference.property.volumeTypeInput"></a>

```python
volume_type_input: str
```

- *Type:* str

---

##### `iops`<sup>Required</sup> <a name="iops" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolumeOutputReference.property.iops"></a>

```python
iops: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `kms_key_arn`<sup>Required</sup> <a name="kms_key_arn" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolumeOutputReference.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

---

##### `size_gib`<sup>Required</sup> <a name="size_gib" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolumeOutputReference.property.sizeGib"></a>

```python
size_gib: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `throughput`<sup>Required</sup> <a name="throughput" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolumeOutputReference.property.throughput"></a>

```python
throughput: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `volume_type`<sup>Required</sup> <a name="volume_type" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolumeOutputReference.property.volumeType"></a>

```python
volume_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolumeOutputReference.property.internalValue"></a>

```python
internal_value: ContainerAwsNodePoolConfigRootVolume
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigRootVolume">ContainerAwsNodePoolConfigRootVolume</a>

---


### ContainerAwsNodePoolConfigSshConfigOutputReference <a name="ContainerAwsNodePoolConfigSshConfigOutputReference" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigSshConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigSshConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_aws_node_pool

containerAwsNodePool.ContainerAwsNodePoolConfigSshConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigSshConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigSshConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigSshConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigSshConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigSshConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigSshConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigSshConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigSshConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigSshConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigSshConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigSshConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigSshConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigSshConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigSshConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigSshConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigSshConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigSshConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigSshConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigSshConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigSshConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigSshConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigSshConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigSshConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigSshConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigSshConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigSshConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigSshConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigSshConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigSshConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigSshConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigSshConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigSshConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigSshConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigSshConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigSshConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigSshConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigSshConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigSshConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigSshConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigSshConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigSshConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigSshConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigSshConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigSshConfigOutputReference.property.ec2KeyPairInput">ec2_key_pair_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigSshConfigOutputReference.property.ec2KeyPair">ec2_key_pair</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigSshConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigSshConfig">ContainerAwsNodePoolConfigSshConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigSshConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigSshConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ec2_key_pair_input`<sup>Optional</sup> <a name="ec2_key_pair_input" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigSshConfigOutputReference.property.ec2KeyPairInput"></a>

```python
ec2_key_pair_input: str
```

- *Type:* str

---

##### `ec2_key_pair`<sup>Required</sup> <a name="ec2_key_pair" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigSshConfigOutputReference.property.ec2KeyPair"></a>

```python
ec2_key_pair: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigSshConfigOutputReference.property.internalValue"></a>

```python
internal_value: ContainerAwsNodePoolConfigSshConfig
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigSshConfig">ContainerAwsNodePoolConfigSshConfig</a>

---


### ContainerAwsNodePoolConfigTaintsList <a name="ContainerAwsNodePoolConfigTaintsList" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_aws_node_pool

containerAwsNodePool.ContainerAwsNodePoolConfigTaintsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ContainerAwsNodePoolConfigTaintsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaints">ContainerAwsNodePoolConfigTaints</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ContainerAwsNodePoolConfigTaints]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaints">ContainerAwsNodePoolConfigTaints</a>]]

---


### ContainerAwsNodePoolConfigTaintsOutputReference <a name="ContainerAwsNodePoolConfigTaintsOutputReference" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_aws_node_pool

containerAwsNodePool.ContainerAwsNodePoolConfigTaintsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsOutputReference.property.effectInput">effect_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsOutputReference.property.effect">effect</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaints">ContainerAwsNodePoolConfigTaints</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `effect_input`<sup>Optional</sup> <a name="effect_input" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsOutputReference.property.effectInput"></a>

```python
effect_input: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `effect`<sup>Required</sup> <a name="effect" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsOutputReference.property.effect"></a>

```python
effect: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaintsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ContainerAwsNodePoolConfigTaints]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolConfigTaints">ContainerAwsNodePoolConfigTaints</a>]

---


### ContainerAwsNodePoolManagementOutputReference <a name="ContainerAwsNodePoolManagementOutputReference" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolManagementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolManagementOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_aws_node_pool

containerAwsNodePool.ContainerAwsNodePoolManagementOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolManagementOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolManagementOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolManagementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolManagementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolManagementOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolManagementOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolManagementOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolManagementOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolManagementOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolManagementOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolManagementOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolManagementOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolManagementOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolManagementOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolManagementOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolManagementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolManagementOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolManagementOutputReference.resetAutoRepair">reset_auto_repair</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolManagementOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolManagementOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolManagementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolManagementOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolManagementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolManagementOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolManagementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolManagementOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolManagementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolManagementOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolManagementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolManagementOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolManagementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolManagementOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolManagementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolManagementOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolManagementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolManagementOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolManagementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolManagementOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolManagementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolManagementOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolManagementOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolManagementOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_auto_repair` <a name="reset_auto_repair" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolManagementOutputReference.resetAutoRepair"></a>

```python
def reset_auto_repair() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolManagementOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolManagementOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolManagementOutputReference.property.autoRepairInput">auto_repair_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolManagementOutputReference.property.autoRepair">auto_repair</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolManagementOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolManagement">ContainerAwsNodePoolManagement</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolManagementOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolManagementOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auto_repair_input`<sup>Optional</sup> <a name="auto_repair_input" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolManagementOutputReference.property.autoRepairInput"></a>

```python
auto_repair_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `auto_repair`<sup>Required</sup> <a name="auto_repair" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolManagementOutputReference.property.autoRepair"></a>

```python
auto_repair: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolManagementOutputReference.property.internalValue"></a>

```python
internal_value: ContainerAwsNodePoolManagement
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolManagement">ContainerAwsNodePoolManagement</a>

---


### ContainerAwsNodePoolMaxPodsConstraintOutputReference <a name="ContainerAwsNodePoolMaxPodsConstraintOutputReference" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolMaxPodsConstraintOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolMaxPodsConstraintOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_aws_node_pool

containerAwsNodePool.ContainerAwsNodePoolMaxPodsConstraintOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolMaxPodsConstraintOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolMaxPodsConstraintOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolMaxPodsConstraintOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolMaxPodsConstraintOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolMaxPodsConstraintOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolMaxPodsConstraintOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolMaxPodsConstraintOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolMaxPodsConstraintOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolMaxPodsConstraintOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolMaxPodsConstraintOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolMaxPodsConstraintOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolMaxPodsConstraintOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolMaxPodsConstraintOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolMaxPodsConstraintOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolMaxPodsConstraintOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolMaxPodsConstraintOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolMaxPodsConstraintOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolMaxPodsConstraintOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolMaxPodsConstraintOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolMaxPodsConstraintOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolMaxPodsConstraintOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolMaxPodsConstraintOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolMaxPodsConstraintOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolMaxPodsConstraintOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolMaxPodsConstraintOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolMaxPodsConstraintOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolMaxPodsConstraintOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolMaxPodsConstraintOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolMaxPodsConstraintOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolMaxPodsConstraintOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolMaxPodsConstraintOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolMaxPodsConstraintOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolMaxPodsConstraintOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolMaxPodsConstraintOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolMaxPodsConstraintOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolMaxPodsConstraintOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolMaxPodsConstraintOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolMaxPodsConstraintOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolMaxPodsConstraintOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolMaxPodsConstraintOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolMaxPodsConstraintOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolMaxPodsConstraintOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolMaxPodsConstraintOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolMaxPodsConstraintOutputReference.property.maxPodsPerNodeInput">max_pods_per_node_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolMaxPodsConstraintOutputReference.property.maxPodsPerNode">max_pods_per_node</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolMaxPodsConstraintOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolMaxPodsConstraint">ContainerAwsNodePoolMaxPodsConstraint</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolMaxPodsConstraintOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolMaxPodsConstraintOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_pods_per_node_input`<sup>Optional</sup> <a name="max_pods_per_node_input" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolMaxPodsConstraintOutputReference.property.maxPodsPerNodeInput"></a>

```python
max_pods_per_node_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_pods_per_node`<sup>Required</sup> <a name="max_pods_per_node" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolMaxPodsConstraintOutputReference.property.maxPodsPerNode"></a>

```python
max_pods_per_node: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolMaxPodsConstraintOutputReference.property.internalValue"></a>

```python
internal_value: ContainerAwsNodePoolMaxPodsConstraint
```

- *Type:* <a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolMaxPodsConstraint">ContainerAwsNodePoolMaxPodsConstraint</a>

---


### ContainerAwsNodePoolTimeoutsOutputReference <a name="ContainerAwsNodePoolTimeoutsOutputReference" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import container_aws_node_pool

containerAwsNodePool.ContainerAwsNodePoolTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolTimeouts">ContainerAwsNodePoolTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ContainerAwsNodePoolTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.containerAwsNodePool.ContainerAwsNodePoolTimeouts">ContainerAwsNodePoolTimeouts</a>]

---



