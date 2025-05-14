# `gkeonpremBareMetalNodePool` Submodule <a name="`gkeonpremBareMetalNodePool` Submodule" id="@cdktf/provider-google.gkeonpremBareMetalNodePool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GkeonpremBareMetalNodePool <a name="GkeonpremBareMetalNodePool" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/gkeonprem_bare_metal_node_pool google_gkeonprem_bare_metal_node_pool}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gkeonprem_bare_metal_node_pool

gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  bare_metal_cluster: str,
  location: str,
  name: str,
  node_pool_config: GkeonpremBareMetalNodePoolNodePoolConfig,
  annotations: typing.Mapping[str] = None,
  display_name: str = None,
  id: str = None,
  project: str = None,
  timeouts: GkeonpremBareMetalNodePoolTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.Initializer.parameter.bareMetalCluster">bare_metal_cluster</a></code> | <code>str</code> | The cluster this node pool belongs to. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.Initializer.parameter.location">location</a></code> | <code>str</code> | The location of the resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.Initializer.parameter.name">name</a></code> | <code>str</code> | The bare metal node pool name. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.Initializer.parameter.nodePoolConfig">node_pool_config</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfig">GkeonpremBareMetalNodePoolNodePoolConfig</a></code> | node_pool_config block. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.Initializer.parameter.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | Annotations on the Bare Metal Node Pool. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | The display name for the Bare Metal Node Pool. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/gkeonprem_bare_metal_node_pool#id GkeonpremBareMetalNodePool#id}. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/gkeonprem_bare_metal_node_pool#project GkeonpremBareMetalNodePool#project}. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeouts">GkeonpremBareMetalNodePoolTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `bare_metal_cluster`<sup>Required</sup> <a name="bare_metal_cluster" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.Initializer.parameter.bareMetalCluster"></a>

- *Type:* str

The cluster this node pool belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/gkeonprem_bare_metal_node_pool#bare_metal_cluster GkeonpremBareMetalNodePool#bare_metal_cluster}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.Initializer.parameter.location"></a>

- *Type:* str

The location of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/gkeonprem_bare_metal_node_pool#location GkeonpremBareMetalNodePool#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.Initializer.parameter.name"></a>

- *Type:* str

The bare metal node pool name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/gkeonprem_bare_metal_node_pool#name GkeonpremBareMetalNodePool#name}

---

##### `node_pool_config`<sup>Required</sup> <a name="node_pool_config" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.Initializer.parameter.nodePoolConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfig">GkeonpremBareMetalNodePoolNodePoolConfig</a>

node_pool_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/gkeonprem_bare_metal_node_pool#node_pool_config GkeonpremBareMetalNodePool#node_pool_config}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.Initializer.parameter.annotations"></a>

- *Type:* typing.Mapping[str]

Annotations on the Bare Metal Node Pool.

This field has the same restrictions as Kubernetes annotations.
The total size of all keys and values combined is limited to 256k.
Key can have 2 segments: prefix (optional) and name (required),
separated by a slash (/).
Prefix must be a DNS subdomain.
Name must be 63 characters or less, begin and end with alphanumerics,
with dashes (-), underscores (_), dots (.), and alphanumerics between.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/gkeonprem_bare_metal_node_pool#annotations GkeonpremBareMetalNodePool#annotations}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.Initializer.parameter.displayName"></a>

- *Type:* str

The display name for the Bare Metal Node Pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/gkeonprem_bare_metal_node_pool#display_name GkeonpremBareMetalNodePool#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/gkeonprem_bare_metal_node_pool#id GkeonpremBareMetalNodePool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/gkeonprem_bare_metal_node_pool#project GkeonpremBareMetalNodePool#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeouts">GkeonpremBareMetalNodePoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/gkeonprem_bare_metal_node_pool#timeouts GkeonpremBareMetalNodePool#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.putNodePoolConfig">put_node_pool_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.resetAnnotations">reset_annotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_node_pool_config` <a name="put_node_pool_config" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.putNodePoolConfig"></a>

```python
def put_node_pool_config(
  node_configs: typing.Union[IResolvable, typing.List[GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigs]],
  labels: typing.Mapping[str] = None,
  operating_system: str = None,
  taints: typing.Union[IResolvable, typing.List[GkeonpremBareMetalNodePoolNodePoolConfigTaints]] = None
) -> None
```

###### `node_configs`<sup>Required</sup> <a name="node_configs" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.putNodePoolConfig.parameter.nodeConfigs"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigs">GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigs</a>]]

node_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/gkeonprem_bare_metal_node_pool#node_configs GkeonpremBareMetalNodePool#node_configs}

---

###### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.putNodePoolConfig.parameter.labels"></a>

- *Type:* typing.Mapping[str]

The map of Kubernetes labels (key/value pairs) to be applied to each node.

These will added in addition to any default label(s)
that Kubernetes may apply to the node. In case of conflict in
label keys, the applied set may differ depending on the Kubernetes
version -- it's best to assume the behavior is undefined and
conflicts should be avoided. For more information, including usage
and the valid values, see:

* http://kubernetes.io/v1.1/docs/user-guide/labels.html
  An object containing a list of "key": value pairs.
  For example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/gkeonprem_bare_metal_node_pool#labels GkeonpremBareMetalNodePool#labels}

---

###### `operating_system`<sup>Optional</sup> <a name="operating_system" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.putNodePoolConfig.parameter.operatingSystem"></a>

- *Type:* str

Specifies the nodes operating system (default: LINUX).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/gkeonprem_bare_metal_node_pool#operating_system GkeonpremBareMetalNodePool#operating_system}

---

###### `taints`<sup>Optional</sup> <a name="taints" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.putNodePoolConfig.parameter.taints"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaints">GkeonpremBareMetalNodePoolNodePoolConfigTaints</a>]]

taints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/gkeonprem_bare_metal_node_pool#taints GkeonpremBareMetalNodePool#taints}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/gkeonprem_bare_metal_node_pool#create GkeonpremBareMetalNodePool#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/gkeonprem_bare_metal_node_pool#delete GkeonpremBareMetalNodePool#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/gkeonprem_bare_metal_node_pool#update GkeonpremBareMetalNodePool#update}.

---

##### `reset_annotations` <a name="reset_annotations" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.resetAnnotations"></a>

```python
def reset_annotations() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GkeonpremBareMetalNodePool resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import gkeonprem_bare_metal_node_pool

gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import gkeonprem_bare_metal_node_pool

gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import gkeonprem_bare_metal_node_pool

gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import gkeonprem_bare_metal_node_pool

gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GkeonpremBareMetalNodePool resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GkeonpremBareMetalNodePool to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GkeonpremBareMetalNodePool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/gkeonprem_bare_metal_node_pool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GkeonpremBareMetalNodePool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.deleteTime">delete_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.effectiveAnnotations">effective_annotations</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.nodePoolConfig">node_pool_config</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference">GkeonpremBareMetalNodePoolNodePoolConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.reconciling">reconciling</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.status">status</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusList">GkeonpremBareMetalNodePoolStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference">GkeonpremBareMetalNodePoolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.annotationsInput">annotations_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.bareMetalClusterInput">bare_metal_cluster_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.nodePoolConfigInput">node_pool_config_input</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfig">GkeonpremBareMetalNodePoolNodePoolConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeouts">GkeonpremBareMetalNodePoolTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.bareMetalCluster">bare_metal_cluster</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `delete_time`<sup>Required</sup> <a name="delete_time" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.deleteTime"></a>

```python
delete_time: str
```

- *Type:* str

---

##### `effective_annotations`<sup>Required</sup> <a name="effective_annotations" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.effectiveAnnotations"></a>

```python
effective_annotations: StringMap
```

- *Type:* cdktf.StringMap

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `node_pool_config`<sup>Required</sup> <a name="node_pool_config" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.nodePoolConfig"></a>

```python
node_pool_config: GkeonpremBareMetalNodePoolNodePoolConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference">GkeonpremBareMetalNodePoolNodePoolConfigOutputReference</a>

---

##### `reconciling`<sup>Required</sup> <a name="reconciling" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.reconciling"></a>

```python
reconciling: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.status"></a>

```python
status: GkeonpremBareMetalNodePoolStatusList
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusList">GkeonpremBareMetalNodePoolStatusList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.timeouts"></a>

```python
timeouts: GkeonpremBareMetalNodePoolTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference">GkeonpremBareMetalNodePoolTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `annotations_input`<sup>Optional</sup> <a name="annotations_input" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.annotationsInput"></a>

```python
annotations_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `bare_metal_cluster_input`<sup>Optional</sup> <a name="bare_metal_cluster_input" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.bareMetalClusterInput"></a>

```python
bare_metal_cluster_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `node_pool_config_input`<sup>Optional</sup> <a name="node_pool_config_input" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.nodePoolConfigInput"></a>

```python
node_pool_config_input: GkeonpremBareMetalNodePoolNodePoolConfig
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfig">GkeonpremBareMetalNodePoolNodePoolConfig</a>

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GkeonpremBareMetalNodePoolTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeouts">GkeonpremBareMetalNodePoolTimeouts</a>]

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `bare_metal_cluster`<sup>Required</sup> <a name="bare_metal_cluster" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.bareMetalCluster"></a>

```python
bare_metal_cluster: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePool.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GkeonpremBareMetalNodePoolConfig <a name="GkeonpremBareMetalNodePoolConfig" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gkeonprem_bare_metal_node_pool

gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  bare_metal_cluster: str,
  location: str,
  name: str,
  node_pool_config: GkeonpremBareMetalNodePoolNodePoolConfig,
  annotations: typing.Mapping[str] = None,
  display_name: str = None,
  id: str = None,
  project: str = None,
  timeouts: GkeonpremBareMetalNodePoolTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolConfig.property.bareMetalCluster">bare_metal_cluster</a></code> | <code>str</code> | The cluster this node pool belongs to. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolConfig.property.location">location</a></code> | <code>str</code> | The location of the resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolConfig.property.name">name</a></code> | <code>str</code> | The bare metal node pool name. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolConfig.property.nodePoolConfig">node_pool_config</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfig">GkeonpremBareMetalNodePoolNodePoolConfig</a></code> | node_pool_config block. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolConfig.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | Annotations on the Bare Metal Node Pool. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolConfig.property.displayName">display_name</a></code> | <code>str</code> | The display name for the Bare Metal Node Pool. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/gkeonprem_bare_metal_node_pool#id GkeonpremBareMetalNodePool#id}. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/gkeonprem_bare_metal_node_pool#project GkeonpremBareMetalNodePool#project}. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeouts">GkeonpremBareMetalNodePoolTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `bare_metal_cluster`<sup>Required</sup> <a name="bare_metal_cluster" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolConfig.property.bareMetalCluster"></a>

```python
bare_metal_cluster: str
```

- *Type:* str

The cluster this node pool belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/gkeonprem_bare_metal_node_pool#bare_metal_cluster GkeonpremBareMetalNodePool#bare_metal_cluster}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/gkeonprem_bare_metal_node_pool#location GkeonpremBareMetalNodePool#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The bare metal node pool name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/gkeonprem_bare_metal_node_pool#name GkeonpremBareMetalNodePool#name}

---

##### `node_pool_config`<sup>Required</sup> <a name="node_pool_config" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolConfig.property.nodePoolConfig"></a>

```python
node_pool_config: GkeonpremBareMetalNodePoolNodePoolConfig
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfig">GkeonpremBareMetalNodePoolNodePoolConfig</a>

node_pool_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/gkeonprem_bare_metal_node_pool#node_pool_config GkeonpremBareMetalNodePool#node_pool_config}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolConfig.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Annotations on the Bare Metal Node Pool.

This field has the same restrictions as Kubernetes annotations.
The total size of all keys and values combined is limited to 256k.
Key can have 2 segments: prefix (optional) and name (required),
separated by a slash (/).
Prefix must be a DNS subdomain.
Name must be 63 characters or less, begin and end with alphanumerics,
with dashes (-), underscores (_), dots (.), and alphanumerics between.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/gkeonprem_bare_metal_node_pool#annotations GkeonpremBareMetalNodePool#annotations}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

The display name for the Bare Metal Node Pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/gkeonprem_bare_metal_node_pool#display_name GkeonpremBareMetalNodePool#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/gkeonprem_bare_metal_node_pool#id GkeonpremBareMetalNodePool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/gkeonprem_bare_metal_node_pool#project GkeonpremBareMetalNodePool#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolConfig.property.timeouts"></a>

```python
timeouts: GkeonpremBareMetalNodePoolTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeouts">GkeonpremBareMetalNodePoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/gkeonprem_bare_metal_node_pool#timeouts GkeonpremBareMetalNodePool#timeouts}

---

### GkeonpremBareMetalNodePoolNodePoolConfig <a name="GkeonpremBareMetalNodePoolNodePoolConfig" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gkeonprem_bare_metal_node_pool

gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfig(
  node_configs: typing.Union[IResolvable, typing.List[GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigs]],
  labels: typing.Mapping[str] = None,
  operating_system: str = None,
  taints: typing.Union[IResolvable, typing.List[GkeonpremBareMetalNodePoolNodePoolConfigTaints]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfig.property.nodeConfigs">node_configs</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigs">GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigs</a>]]</code> | node_configs block. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | The map of Kubernetes labels (key/value pairs) to be applied to each node. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfig.property.operatingSystem">operating_system</a></code> | <code>str</code> | Specifies the nodes operating system (default: LINUX). |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfig.property.taints">taints</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaints">GkeonpremBareMetalNodePoolNodePoolConfigTaints</a>]]</code> | taints block. |

---

##### `node_configs`<sup>Required</sup> <a name="node_configs" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfig.property.nodeConfigs"></a>

```python
node_configs: typing.Union[IResolvable, typing.List[GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigs">GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigs</a>]]

node_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/gkeonprem_bare_metal_node_pool#node_configs GkeonpremBareMetalNodePool#node_configs}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

The map of Kubernetes labels (key/value pairs) to be applied to each node.

These will added in addition to any default label(s)
that Kubernetes may apply to the node. In case of conflict in
label keys, the applied set may differ depending on the Kubernetes
version -- it's best to assume the behavior is undefined and
conflicts should be avoided. For more information, including usage
and the valid values, see:

* http://kubernetes.io/v1.1/docs/user-guide/labels.html
  An object containing a list of "key": value pairs.
  For example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/gkeonprem_bare_metal_node_pool#labels GkeonpremBareMetalNodePool#labels}

---

##### `operating_system`<sup>Optional</sup> <a name="operating_system" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfig.property.operatingSystem"></a>

```python
operating_system: str
```

- *Type:* str

Specifies the nodes operating system (default: LINUX).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/gkeonprem_bare_metal_node_pool#operating_system GkeonpremBareMetalNodePool#operating_system}

---

##### `taints`<sup>Optional</sup> <a name="taints" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfig.property.taints"></a>

```python
taints: typing.Union[IResolvable, typing.List[GkeonpremBareMetalNodePoolNodePoolConfigTaints]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaints">GkeonpremBareMetalNodePoolNodePoolConfigTaints</a>]]

taints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/gkeonprem_bare_metal_node_pool#taints GkeonpremBareMetalNodePool#taints}

---

### GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigs <a name="GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigs" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigs.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gkeonprem_bare_metal_node_pool

gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigs(
  labels: typing.Mapping[str] = None,
  node_ip: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigs.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | The map of Kubernetes labels (key/value pairs) to be applied to each node. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigs.property.nodeIp">node_ip</a></code> | <code>str</code> | The default IPv4 address for SSH access and Kubernetes node. Example: 192.168.0.1. |

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigs.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

The map of Kubernetes labels (key/value pairs) to be applied to each node.

These will added in addition to any default label(s)
that Kubernetes may apply to the node. In case of conflict in
label keys, the applied set may differ depending on the Kubernetes
version -- it's best to assume the behavior is undefined and
conflicts should be avoided. For more information, including usage
and the valid values, see:

* http://kubernetes.io/v1.1/docs/user-guide/labels.html
  An object containing a list of "key": value pairs.
  For example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/gkeonprem_bare_metal_node_pool#labels GkeonpremBareMetalNodePool#labels}

---

##### `node_ip`<sup>Optional</sup> <a name="node_ip" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigs.property.nodeIp"></a>

```python
node_ip: str
```

- *Type:* str

The default IPv4 address for SSH access and Kubernetes node. Example: 192.168.0.1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/gkeonprem_bare_metal_node_pool#node_ip GkeonpremBareMetalNodePool#node_ip}

---

### GkeonpremBareMetalNodePoolNodePoolConfigTaints <a name="GkeonpremBareMetalNodePoolNodePoolConfigTaints" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaints.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gkeonprem_bare_metal_node_pool

gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaints(
  effect: str = None,
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaints.property.effect">effect</a></code> | <code>str</code> | Specifies the nodes operating system (default: LINUX). Possible values: ["EFFECT_UNSPECIFIED", "PREFER_NO_SCHEDULE", "NO_EXECUTE"]. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaints.property.key">key</a></code> | <code>str</code> | Key associated with the effect. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaints.property.value">value</a></code> | <code>str</code> | Value associated with the effect. |

---

##### `effect`<sup>Optional</sup> <a name="effect" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaints.property.effect"></a>

```python
effect: str
```

- *Type:* str

Specifies the nodes operating system (default: LINUX). Possible values: ["EFFECT_UNSPECIFIED", "PREFER_NO_SCHEDULE", "NO_EXECUTE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/gkeonprem_bare_metal_node_pool#effect GkeonpremBareMetalNodePool#effect}

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaints.property.key"></a>

```python
key: str
```

- *Type:* str

Key associated with the effect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/gkeonprem_bare_metal_node_pool#key GkeonpremBareMetalNodePool#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaints.property.value"></a>

```python
value: str
```

- *Type:* str

Value associated with the effect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/gkeonprem_bare_metal_node_pool#value GkeonpremBareMetalNodePool#value}

---

### GkeonpremBareMetalNodePoolStatus <a name="GkeonpremBareMetalNodePoolStatus" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatus.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gkeonprem_bare_metal_node_pool

gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatus()
```


### GkeonpremBareMetalNodePoolStatusConditions <a name="GkeonpremBareMetalNodePoolStatusConditions" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditions.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gkeonprem_bare_metal_node_pool

gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditions()
```


### GkeonpremBareMetalNodePoolTimeouts <a name="GkeonpremBareMetalNodePoolTimeouts" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gkeonprem_bare_metal_node_pool

gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/gkeonprem_bare_metal_node_pool#create GkeonpremBareMetalNodePool#create}. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/gkeonprem_bare_metal_node_pool#delete GkeonpremBareMetalNodePool#delete}. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/gkeonprem_bare_metal_node_pool#update GkeonpremBareMetalNodePool#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/gkeonprem_bare_metal_node_pool#create GkeonpremBareMetalNodePool#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/gkeonprem_bare_metal_node_pool#delete GkeonpremBareMetalNodePool#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/gkeonprem_bare_metal_node_pool#update GkeonpremBareMetalNodePool#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsList <a name="GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsList" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gkeonprem_bare_metal_node_pool

gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigs">GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigs</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigs">GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigs</a>]]

---


### GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference <a name="GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gkeonprem_bare_metal_node_pool

gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.resetNodeIp">reset_node_ip</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_node_ip` <a name="reset_node_ip" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.resetNodeIp"></a>

```python
def reset_node_ip() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.property.nodeIpInput">node_ip_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.property.nodeIp">node_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigs">GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigs</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `node_ip_input`<sup>Optional</sup> <a name="node_ip_input" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.property.nodeIpInput"></a>

```python
node_ip_input: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `node_ip`<sup>Required</sup> <a name="node_ip" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.property.nodeIp"></a>

```python
node_ip: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigs]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigs">GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigs</a>]

---


### GkeonpremBareMetalNodePoolNodePoolConfigOutputReference <a name="GkeonpremBareMetalNodePoolNodePoolConfigOutputReference" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gkeonprem_bare_metal_node_pool

gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.putNodeConfigs">put_node_configs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.putTaints">put_taints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.resetOperatingSystem">reset_operating_system</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.resetTaints">reset_taints</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_node_configs` <a name="put_node_configs" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.putNodeConfigs"></a>

```python
def put_node_configs(
  value: typing.Union[IResolvable, typing.List[GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigs]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.putNodeConfigs.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigs">GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigs</a>]]

---

##### `put_taints` <a name="put_taints" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.putTaints"></a>

```python
def put_taints(
  value: typing.Union[IResolvable, typing.List[GkeonpremBareMetalNodePoolNodePoolConfigTaints]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.putTaints.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaints">GkeonpremBareMetalNodePoolNodePoolConfigTaints</a>]]

---

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_operating_system` <a name="reset_operating_system" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.resetOperatingSystem"></a>

```python
def reset_operating_system() -> None
```

##### `reset_taints` <a name="reset_taints" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.resetTaints"></a>

```python
def reset_taints() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.property.nodeConfigs">node_configs</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsList">GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.property.taints">taints</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsList">GkeonpremBareMetalNodePoolNodePoolConfigTaintsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.property.nodeConfigsInput">node_configs_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigs">GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigs</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.property.operatingSystemInput">operating_system_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.property.taintsInput">taints_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaints">GkeonpremBareMetalNodePoolNodePoolConfigTaints</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.property.operatingSystem">operating_system</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfig">GkeonpremBareMetalNodePoolNodePoolConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `node_configs`<sup>Required</sup> <a name="node_configs" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.property.nodeConfigs"></a>

```python
node_configs: GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsList
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsList">GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsList</a>

---

##### `taints`<sup>Required</sup> <a name="taints" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.property.taints"></a>

```python
taints: GkeonpremBareMetalNodePoolNodePoolConfigTaintsList
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsList">GkeonpremBareMetalNodePoolNodePoolConfigTaintsList</a>

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `node_configs_input`<sup>Optional</sup> <a name="node_configs_input" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.property.nodeConfigsInput"></a>

```python
node_configs_input: typing.Union[IResolvable, typing.List[GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigs">GkeonpremBareMetalNodePoolNodePoolConfigNodeConfigs</a>]]

---

##### `operating_system_input`<sup>Optional</sup> <a name="operating_system_input" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.property.operatingSystemInput"></a>

```python
operating_system_input: str
```

- *Type:* str

---

##### `taints_input`<sup>Optional</sup> <a name="taints_input" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.property.taintsInput"></a>

```python
taints_input: typing.Union[IResolvable, typing.List[GkeonpremBareMetalNodePoolNodePoolConfigTaints]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaints">GkeonpremBareMetalNodePoolNodePoolConfigTaints</a>]]

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `operating_system`<sup>Required</sup> <a name="operating_system" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.property.operatingSystem"></a>

```python
operating_system: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigOutputReference.property.internalValue"></a>

```python
internal_value: GkeonpremBareMetalNodePoolNodePoolConfig
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfig">GkeonpremBareMetalNodePoolNodePoolConfig</a>

---


### GkeonpremBareMetalNodePoolNodePoolConfigTaintsList <a name="GkeonpremBareMetalNodePoolNodePoolConfigTaintsList" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gkeonprem_bare_metal_node_pool

gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaints">GkeonpremBareMetalNodePoolNodePoolConfigTaints</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GkeonpremBareMetalNodePoolNodePoolConfigTaints]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaints">GkeonpremBareMetalNodePoolNodePoolConfigTaints</a>]]

---


### GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference <a name="GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gkeonprem_bare_metal_node_pool

gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.resetEffect">reset_effect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_effect` <a name="reset_effect" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.resetEffect"></a>

```python
def reset_effect() -> None
```

##### `reset_key` <a name="reset_key" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.property.effectInput">effect_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.property.effect">effect</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaints">GkeonpremBareMetalNodePoolNodePoolConfigTaints</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `effect_input`<sup>Optional</sup> <a name="effect_input" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.property.effectInput"></a>

```python
effect_input: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `effect`<sup>Required</sup> <a name="effect" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.property.effect"></a>

```python
effect: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GkeonpremBareMetalNodePoolNodePoolConfigTaints]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolNodePoolConfigTaints">GkeonpremBareMetalNodePoolNodePoolConfigTaints</a>]

---


### GkeonpremBareMetalNodePoolStatusConditionsList <a name="GkeonpremBareMetalNodePoolStatusConditionsList" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gkeonprem_bare_metal_node_pool

gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GkeonpremBareMetalNodePoolStatusConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GkeonpremBareMetalNodePoolStatusConditionsOutputReference <a name="GkeonpremBareMetalNodePoolStatusConditionsOutputReference" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gkeonprem_bare_metal_node_pool

gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.property.lastTransitionTime">last_transition_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.property.reason">reason</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditions">GkeonpremBareMetalNodePoolStatusConditions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `last_transition_time`<sup>Required</sup> <a name="last_transition_time" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.property.lastTransitionTime"></a>

```python
last_transition_time: str
```

- *Type:* str

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `reason`<sup>Required</sup> <a name="reason" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.property.reason"></a>

```python
reason: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsOutputReference.property.internalValue"></a>

```python
internal_value: GkeonpremBareMetalNodePoolStatusConditions
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditions">GkeonpremBareMetalNodePoolStatusConditions</a>

---


### GkeonpremBareMetalNodePoolStatusList <a name="GkeonpremBareMetalNodePoolStatusList" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gkeonprem_bare_metal_node_pool

gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GkeonpremBareMetalNodePoolStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GkeonpremBareMetalNodePoolStatusOutputReference <a name="GkeonpremBareMetalNodePoolStatusOutputReference" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gkeonprem_bare_metal_node_pool

gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusOutputReference.property.conditions">conditions</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsList">GkeonpremBareMetalNodePoolStatusConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusOutputReference.property.errorMessage">error_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatus">GkeonpremBareMetalNodePoolStatus</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusOutputReference.property.conditions"></a>

```python
conditions: GkeonpremBareMetalNodePoolStatusConditionsList
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusConditionsList">GkeonpremBareMetalNodePoolStatusConditionsList</a>

---

##### `error_message`<sup>Required</sup> <a name="error_message" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusOutputReference.property.errorMessage"></a>

```python
error_message: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatusOutputReference.property.internalValue"></a>

```python
internal_value: GkeonpremBareMetalNodePoolStatus
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolStatus">GkeonpremBareMetalNodePoolStatus</a>

---


### GkeonpremBareMetalNodePoolTimeoutsOutputReference <a name="GkeonpremBareMetalNodePoolTimeoutsOutputReference" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gkeonprem_bare_metal_node_pool

gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeouts">GkeonpremBareMetalNodePoolTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GkeonpremBareMetalNodePoolTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.gkeonpremBareMetalNodePool.GkeonpremBareMetalNodePoolTimeouts">GkeonpremBareMetalNodePoolTimeouts</a>]

---



