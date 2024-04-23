# `gkeHubFleet` Submodule <a name="`gkeHubFleet` Submodule" id="@cdktf/provider-google.gkeHubFleet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GkeHubFleet <a name="GkeHubFleet" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/gke_hub_fleet google_gke_hub_fleet}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gke_hub_fleet

gkeHubFleet.GkeHubFleet(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  default_cluster_config: GkeHubFleetDefaultClusterConfig = None,
  display_name: str = None,
  id: str = None,
  project: str = None,
  timeouts: GkeHubFleetTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleet.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleet.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleet.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleet.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleet.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleet.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleet.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleet.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleet.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleet.Initializer.parameter.defaultClusterConfig">default_cluster_config</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfig">GkeHubFleetDefaultClusterConfig</a></code> | default_cluster_config block. |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleet.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | A user-assigned display name of the Fleet. |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleet.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/gke_hub_fleet#id GkeHubFleet#id}. |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleet.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/gke_hub_fleet#project GkeHubFleet#project}. |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleet.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetTimeouts">GkeHubFleetTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `default_cluster_config`<sup>Optional</sup> <a name="default_cluster_config" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.Initializer.parameter.defaultClusterConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfig">GkeHubFleetDefaultClusterConfig</a>

default_cluster_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/gke_hub_fleet#default_cluster_config GkeHubFleet#default_cluster_config}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.Initializer.parameter.displayName"></a>

- *Type:* str

A user-assigned display name of the Fleet.

When present, it must be between 4 to 30 characters.
Allowed characters are: lowercase and uppercase letters, numbers, hyphen, single-quote, double-quote, space, and exclamation point.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/gke_hub_fleet#display_name GkeHubFleet#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/gke_hub_fleet#id GkeHubFleet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/gke_hub_fleet#project GkeHubFleet#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetTimeouts">GkeHubFleetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/gke_hub_fleet#timeouts GkeHubFleet#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleet.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleet.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleet.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleet.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleet.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleet.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleet.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleet.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleet.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleet.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleet.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleet.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleet.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleet.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleet.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleet.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleet.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleet.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleet.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleet.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleet.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleet.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleet.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleet.putDefaultClusterConfig">put_default_cluster_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleet.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleet.resetDefaultClusterConfig">reset_default_cluster_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleet.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleet.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleet.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleet.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_default_cluster_config` <a name="put_default_cluster_config" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.putDefaultClusterConfig"></a>

```python
def put_default_cluster_config(
  binary_authorization_config: GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfig = None,
  security_posture_config: GkeHubFleetDefaultClusterConfigSecurityPostureConfig = None
) -> None
```

###### `binary_authorization_config`<sup>Optional</sup> <a name="binary_authorization_config" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.putDefaultClusterConfig.parameter.binaryAuthorizationConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfig">GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfig</a>

binary_authorization_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/gke_hub_fleet#binary_authorization_config GkeHubFleet#binary_authorization_config}

---

###### `security_posture_config`<sup>Optional</sup> <a name="security_posture_config" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.putDefaultClusterConfig.parameter.securityPostureConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigSecurityPostureConfig">GkeHubFleetDefaultClusterConfigSecurityPostureConfig</a>

security_posture_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/gke_hub_fleet#security_posture_config GkeHubFleet#security_posture_config}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/gke_hub_fleet#create GkeHubFleet#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/gke_hub_fleet#delete GkeHubFleet#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/gke_hub_fleet#update GkeHubFleet#update}.

---

##### `reset_default_cluster_config` <a name="reset_default_cluster_config" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.resetDefaultClusterConfig"></a>

```python
def reset_default_cluster_config() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleet.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleet.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleet.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleet.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GkeHubFleet resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import gke_hub_fleet

gkeHubFleet.GkeHubFleet.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import gke_hub_fleet

gkeHubFleet.GkeHubFleet.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import gke_hub_fleet

gkeHubFleet.GkeHubFleet.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import gke_hub_fleet

gkeHubFleet.GkeHubFleet.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GkeHubFleet resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GkeHubFleet to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GkeHubFleet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/gke_hub_fleet#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GkeHubFleet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleet.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleet.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleet.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleet.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleet.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleet.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleet.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleet.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleet.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleet.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleet.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleet.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleet.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleet.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleet.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleet.property.defaultClusterConfig">default_cluster_config</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigOutputReference">GkeHubFleetDefaultClusterConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleet.property.deleteTime">delete_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleet.property.state">state</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetStateList">GkeHubFleetStateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleet.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetTimeoutsOutputReference">GkeHubFleetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleet.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleet.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleet.property.defaultClusterConfigInput">default_cluster_config_input</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfig">GkeHubFleetDefaultClusterConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleet.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleet.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleet.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleet.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetTimeouts">GkeHubFleetTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleet.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleet.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleet.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `default_cluster_config`<sup>Required</sup> <a name="default_cluster_config" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.property.defaultClusterConfig"></a>

```python
default_cluster_config: GkeHubFleetDefaultClusterConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigOutputReference">GkeHubFleetDefaultClusterConfigOutputReference</a>

---

##### `delete_time`<sup>Required</sup> <a name="delete_time" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.property.deleteTime"></a>

```python
delete_time: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.property.state"></a>

```python
state: GkeHubFleetStateList
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetStateList">GkeHubFleetStateList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.property.timeouts"></a>

```python
timeouts: GkeHubFleetTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetTimeoutsOutputReference">GkeHubFleetTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `default_cluster_config_input`<sup>Optional</sup> <a name="default_cluster_config_input" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.property.defaultClusterConfigInput"></a>

```python
default_cluster_config_input: GkeHubFleetDefaultClusterConfig
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfig">GkeHubFleetDefaultClusterConfig</a>

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GkeHubFleetTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetTimeouts">GkeHubFleetTimeouts</a>]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleet.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleet.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GkeHubFleetConfig <a name="GkeHubFleetConfig" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gke_hub_fleet

gkeHubFleet.GkeHubFleetConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  default_cluster_config: GkeHubFleetDefaultClusterConfig = None,
  display_name: str = None,
  id: str = None,
  project: str = None,
  timeouts: GkeHubFleetTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetConfig.property.defaultClusterConfig">default_cluster_config</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfig">GkeHubFleetDefaultClusterConfig</a></code> | default_cluster_config block. |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetConfig.property.displayName">display_name</a></code> | <code>str</code> | A user-assigned display name of the Fleet. |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/gke_hub_fleet#id GkeHubFleet#id}. |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/gke_hub_fleet#project GkeHubFleet#project}. |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetTimeouts">GkeHubFleetTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `default_cluster_config`<sup>Optional</sup> <a name="default_cluster_config" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetConfig.property.defaultClusterConfig"></a>

```python
default_cluster_config: GkeHubFleetDefaultClusterConfig
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfig">GkeHubFleetDefaultClusterConfig</a>

default_cluster_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/gke_hub_fleet#default_cluster_config GkeHubFleet#default_cluster_config}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

A user-assigned display name of the Fleet.

When present, it must be between 4 to 30 characters.
Allowed characters are: lowercase and uppercase letters, numbers, hyphen, single-quote, double-quote, space, and exclamation point.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/gke_hub_fleet#display_name GkeHubFleet#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/gke_hub_fleet#id GkeHubFleet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/gke_hub_fleet#project GkeHubFleet#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetConfig.property.timeouts"></a>

```python
timeouts: GkeHubFleetTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetTimeouts">GkeHubFleetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/gke_hub_fleet#timeouts GkeHubFleet#timeouts}

---

### GkeHubFleetDefaultClusterConfig <a name="GkeHubFleetDefaultClusterConfig" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gke_hub_fleet

gkeHubFleet.GkeHubFleetDefaultClusterConfig(
  binary_authorization_config: GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfig = None,
  security_posture_config: GkeHubFleetDefaultClusterConfigSecurityPostureConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfig.property.binaryAuthorizationConfig">binary_authorization_config</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfig">GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfig</a></code> | binary_authorization_config block. |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfig.property.securityPostureConfig">security_posture_config</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigSecurityPostureConfig">GkeHubFleetDefaultClusterConfigSecurityPostureConfig</a></code> | security_posture_config block. |

---

##### `binary_authorization_config`<sup>Optional</sup> <a name="binary_authorization_config" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfig.property.binaryAuthorizationConfig"></a>

```python
binary_authorization_config: GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfig
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfig">GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfig</a>

binary_authorization_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/gke_hub_fleet#binary_authorization_config GkeHubFleet#binary_authorization_config}

---

##### `security_posture_config`<sup>Optional</sup> <a name="security_posture_config" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfig.property.securityPostureConfig"></a>

```python
security_posture_config: GkeHubFleetDefaultClusterConfigSecurityPostureConfig
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigSecurityPostureConfig">GkeHubFleetDefaultClusterConfigSecurityPostureConfig</a>

security_posture_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/gke_hub_fleet#security_posture_config GkeHubFleet#security_posture_config}

---

### GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfig <a name="GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfig" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gke_hub_fleet

gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfig(
  evaluation_mode: str = None,
  policy_bindings: typing.Union[IResolvable, typing.List[GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindings]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfig.property.evaluationMode">evaluation_mode</a></code> | <code>str</code> | Mode of operation for binauthz policy evaluation. Possible values: ["DISABLED", "POLICY_BINDINGS"]. |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfig.property.policyBindings">policy_bindings</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindings">GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindings</a>]]</code> | policy_bindings block. |

---

##### `evaluation_mode`<sup>Optional</sup> <a name="evaluation_mode" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfig.property.evaluationMode"></a>

```python
evaluation_mode: str
```

- *Type:* str

Mode of operation for binauthz policy evaluation. Possible values: ["DISABLED", "POLICY_BINDINGS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/gke_hub_fleet#evaluation_mode GkeHubFleet#evaluation_mode}

---

##### `policy_bindings`<sup>Optional</sup> <a name="policy_bindings" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfig.property.policyBindings"></a>

```python
policy_bindings: typing.Union[IResolvable, typing.List[GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindings]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindings">GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindings</a>]]

policy_bindings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/gke_hub_fleet#policy_bindings GkeHubFleet#policy_bindings}

---

### GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindings <a name="GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindings" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindings.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gke_hub_fleet

gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindings(
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindings.property.name">name</a></code> | <code>str</code> | The relative resource name of the binauthz platform policy to audit. GKE platform policies have the following format: 'projects/{project_number}/platforms/gke/policies/{policy_id}'. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindings.property.name"></a>

```python
name: str
```

- *Type:* str

The relative resource name of the binauthz platform policy to audit. GKE platform policies have the following format: 'projects/{project_number}/platforms/gke/policies/{policy_id}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/gke_hub_fleet#name GkeHubFleet#name}

---

### GkeHubFleetDefaultClusterConfigSecurityPostureConfig <a name="GkeHubFleetDefaultClusterConfigSecurityPostureConfig" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigSecurityPostureConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigSecurityPostureConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gke_hub_fleet

gkeHubFleet.GkeHubFleetDefaultClusterConfigSecurityPostureConfig(
  mode: str = None,
  vulnerability_mode: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigSecurityPostureConfig.property.mode">mode</a></code> | <code>str</code> | Sets which mode to use for Security Posture features. Possible values: ["DISABLED", "BASIC"]. |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigSecurityPostureConfig.property.vulnerabilityMode">vulnerability_mode</a></code> | <code>str</code> | Sets which mode to use for vulnerability scanning. Possible values: ["VULNERABILITY_DISABLED", "VULNERABILITY_BASIC", "VULNERABILITY_ENTERPRISE"]. |

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigSecurityPostureConfig.property.mode"></a>

```python
mode: str
```

- *Type:* str

Sets which mode to use for Security Posture features. Possible values: ["DISABLED", "BASIC"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/gke_hub_fleet#mode GkeHubFleet#mode}

---

##### `vulnerability_mode`<sup>Optional</sup> <a name="vulnerability_mode" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigSecurityPostureConfig.property.vulnerabilityMode"></a>

```python
vulnerability_mode: str
```

- *Type:* str

Sets which mode to use for vulnerability scanning. Possible values: ["VULNERABILITY_DISABLED", "VULNERABILITY_BASIC", "VULNERABILITY_ENTERPRISE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/gke_hub_fleet#vulnerability_mode GkeHubFleet#vulnerability_mode}

---

### GkeHubFleetState <a name="GkeHubFleetState" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetState"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetState.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gke_hub_fleet

gkeHubFleet.GkeHubFleetState()
```


### GkeHubFleetTimeouts <a name="GkeHubFleetTimeouts" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gke_hub_fleet

gkeHubFleet.GkeHubFleetTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/gke_hub_fleet#create GkeHubFleet#create}. |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/gke_hub_fleet#delete GkeHubFleet#delete}. |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/gke_hub_fleet#update GkeHubFleet#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/gke_hub_fleet#create GkeHubFleet#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/gke_hub_fleet#delete GkeHubFleet#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/gke_hub_fleet#update GkeHubFleet#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference <a name="GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gke_hub_fleet

gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.putPolicyBindings">put_policy_bindings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.resetEvaluationMode">reset_evaluation_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.resetPolicyBindings">reset_policy_bindings</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_policy_bindings` <a name="put_policy_bindings" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.putPolicyBindings"></a>

```python
def put_policy_bindings(
  value: typing.Union[IResolvable, typing.List[GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindings]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.putPolicyBindings.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindings">GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindings</a>]]

---

##### `reset_evaluation_mode` <a name="reset_evaluation_mode" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.resetEvaluationMode"></a>

```python
def reset_evaluation_mode() -> None
```

##### `reset_policy_bindings` <a name="reset_policy_bindings" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.resetPolicyBindings"></a>

```python
def reset_policy_bindings() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.property.policyBindings">policy_bindings</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsList">GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.property.evaluationModeInput">evaluation_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.property.policyBindingsInput">policy_bindings_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindings">GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindings</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.property.evaluationMode">evaluation_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfig">GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `policy_bindings`<sup>Required</sup> <a name="policy_bindings" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.property.policyBindings"></a>

```python
policy_bindings: GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsList
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsList">GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsList</a>

---

##### `evaluation_mode_input`<sup>Optional</sup> <a name="evaluation_mode_input" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.property.evaluationModeInput"></a>

```python
evaluation_mode_input: str
```

- *Type:* str

---

##### `policy_bindings_input`<sup>Optional</sup> <a name="policy_bindings_input" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.property.policyBindingsInput"></a>

```python
policy_bindings_input: typing.Union[IResolvable, typing.List[GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindings]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindings">GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindings</a>]]

---

##### `evaluation_mode`<sup>Required</sup> <a name="evaluation_mode" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.property.evaluationMode"></a>

```python
evaluation_mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference.property.internalValue"></a>

```python
internal_value: GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfig
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfig">GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfig</a>

---


### GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsList <a name="GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsList" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gke_hub_fleet

gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindings">GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindings</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindings]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindings">GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindings</a>]]

---


### GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference <a name="GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gke_hub_fleet

gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.resetName">reset_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.resetName"></a>

```python
def reset_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindings">GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindings</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindingsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindings]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindings">GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindings</a>]

---


### GkeHubFleetDefaultClusterConfigOutputReference <a name="GkeHubFleetDefaultClusterConfigOutputReference" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gke_hub_fleet

gkeHubFleet.GkeHubFleetDefaultClusterConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigOutputReference.putBinaryAuthorizationConfig">put_binary_authorization_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigOutputReference.putSecurityPostureConfig">put_security_posture_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigOutputReference.resetBinaryAuthorizationConfig">reset_binary_authorization_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigOutputReference.resetSecurityPostureConfig">reset_security_posture_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_binary_authorization_config` <a name="put_binary_authorization_config" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigOutputReference.putBinaryAuthorizationConfig"></a>

```python
def put_binary_authorization_config(
  evaluation_mode: str = None,
  policy_bindings: typing.Union[IResolvable, typing.List[GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindings]] = None
) -> None
```

###### `evaluation_mode`<sup>Optional</sup> <a name="evaluation_mode" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigOutputReference.putBinaryAuthorizationConfig.parameter.evaluationMode"></a>

- *Type:* str

Mode of operation for binauthz policy evaluation. Possible values: ["DISABLED", "POLICY_BINDINGS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/gke_hub_fleet#evaluation_mode GkeHubFleet#evaluation_mode}

---

###### `policy_bindings`<sup>Optional</sup> <a name="policy_bindings" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigOutputReference.putBinaryAuthorizationConfig.parameter.policyBindings"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindings">GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigPolicyBindings</a>]]

policy_bindings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/gke_hub_fleet#policy_bindings GkeHubFleet#policy_bindings}

---

##### `put_security_posture_config` <a name="put_security_posture_config" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigOutputReference.putSecurityPostureConfig"></a>

```python
def put_security_posture_config(
  mode: str = None,
  vulnerability_mode: str = None
) -> None
```

###### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigOutputReference.putSecurityPostureConfig.parameter.mode"></a>

- *Type:* str

Sets which mode to use for Security Posture features. Possible values: ["DISABLED", "BASIC"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/gke_hub_fleet#mode GkeHubFleet#mode}

---

###### `vulnerability_mode`<sup>Optional</sup> <a name="vulnerability_mode" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigOutputReference.putSecurityPostureConfig.parameter.vulnerabilityMode"></a>

- *Type:* str

Sets which mode to use for vulnerability scanning. Possible values: ["VULNERABILITY_DISABLED", "VULNERABILITY_BASIC", "VULNERABILITY_ENTERPRISE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.26.0/docs/resources/gke_hub_fleet#vulnerability_mode GkeHubFleet#vulnerability_mode}

---

##### `reset_binary_authorization_config` <a name="reset_binary_authorization_config" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigOutputReference.resetBinaryAuthorizationConfig"></a>

```python
def reset_binary_authorization_config() -> None
```

##### `reset_security_posture_config` <a name="reset_security_posture_config" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigOutputReference.resetSecurityPostureConfig"></a>

```python
def reset_security_posture_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigOutputReference.property.binaryAuthorizationConfig">binary_authorization_config</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference">GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigOutputReference.property.securityPostureConfig">security_posture_config</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference">GkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigOutputReference.property.binaryAuthorizationConfigInput">binary_authorization_config_input</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfig">GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigOutputReference.property.securityPostureConfigInput">security_posture_config_input</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigSecurityPostureConfig">GkeHubFleetDefaultClusterConfigSecurityPostureConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfig">GkeHubFleetDefaultClusterConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `binary_authorization_config`<sup>Required</sup> <a name="binary_authorization_config" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigOutputReference.property.binaryAuthorizationConfig"></a>

```python
binary_authorization_config: GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference">GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfigOutputReference</a>

---

##### `security_posture_config`<sup>Required</sup> <a name="security_posture_config" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigOutputReference.property.securityPostureConfig"></a>

```python
security_posture_config: GkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference">GkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference</a>

---

##### `binary_authorization_config_input`<sup>Optional</sup> <a name="binary_authorization_config_input" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigOutputReference.property.binaryAuthorizationConfigInput"></a>

```python
binary_authorization_config_input: GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfig
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfig">GkeHubFleetDefaultClusterConfigBinaryAuthorizationConfig</a>

---

##### `security_posture_config_input`<sup>Optional</sup> <a name="security_posture_config_input" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigOutputReference.property.securityPostureConfigInput"></a>

```python
security_posture_config_input: GkeHubFleetDefaultClusterConfigSecurityPostureConfig
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigSecurityPostureConfig">GkeHubFleetDefaultClusterConfigSecurityPostureConfig</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigOutputReference.property.internalValue"></a>

```python
internal_value: GkeHubFleetDefaultClusterConfig
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfig">GkeHubFleetDefaultClusterConfig</a>

---


### GkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference <a name="GkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gke_hub_fleet

gkeHubFleet.GkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.resetMode">reset_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.resetVulnerabilityMode">reset_vulnerability_mode</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_mode` <a name="reset_mode" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.resetMode"></a>

```python
def reset_mode() -> None
```

##### `reset_vulnerability_mode` <a name="reset_vulnerability_mode" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.resetVulnerabilityMode"></a>

```python
def reset_vulnerability_mode() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.property.modeInput">mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.property.vulnerabilityModeInput">vulnerability_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.property.mode">mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.property.vulnerabilityMode">vulnerability_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigSecurityPostureConfig">GkeHubFleetDefaultClusterConfigSecurityPostureConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `mode_input`<sup>Optional</sup> <a name="mode_input" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.property.modeInput"></a>

```python
mode_input: str
```

- *Type:* str

---

##### `vulnerability_mode_input`<sup>Optional</sup> <a name="vulnerability_mode_input" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.property.vulnerabilityModeInput"></a>

```python
vulnerability_mode_input: str
```

- *Type:* str

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.property.mode"></a>

```python
mode: str
```

- *Type:* str

---

##### `vulnerability_mode`<sup>Required</sup> <a name="vulnerability_mode" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.property.vulnerabilityMode"></a>

```python
vulnerability_mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigSecurityPostureConfigOutputReference.property.internalValue"></a>

```python
internal_value: GkeHubFleetDefaultClusterConfigSecurityPostureConfig
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetDefaultClusterConfigSecurityPostureConfig">GkeHubFleetDefaultClusterConfigSecurityPostureConfig</a>

---


### GkeHubFleetStateList <a name="GkeHubFleetStateList" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetStateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetStateList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gke_hub_fleet

gkeHubFleet.GkeHubFleetStateList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetStateList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetStateList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetStateList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetStateList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetStateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetStateList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetStateList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetStateList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetStateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetStateList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetStateList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetStateList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetStateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetStateList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetStateList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetStateList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetStateList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetStateList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GkeHubFleetStateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetStateList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetStateList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetStateList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetStateList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetStateList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GkeHubFleetStateOutputReference <a name="GkeHubFleetStateOutputReference" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetStateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetStateOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gke_hub_fleet

gkeHubFleet.GkeHubFleetStateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetStateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetStateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetStateOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetStateOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetStateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetStateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetStateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetStateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetStateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetStateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetStateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetStateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetStateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetStateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetStateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetStateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetStateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetStateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetStateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetStateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetStateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetStateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetStateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetStateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetStateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetStateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetStateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetStateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetStateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetStateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetStateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetStateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetStateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetStateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetStateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetStateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetStateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetStateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetStateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetStateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetStateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetStateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetStateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetStateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetStateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetStateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetStateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetStateOutputReference.property.code">code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetStateOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetState">GkeHubFleetState</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetStateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetStateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetStateOutputReference.property.code"></a>

```python
code: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetStateOutputReference.property.internalValue"></a>

```python
internal_value: GkeHubFleetState
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetState">GkeHubFleetState</a>

---


### GkeHubFleetTimeoutsOutputReference <a name="GkeHubFleetTimeoutsOutputReference" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gke_hub_fleet

gkeHubFleet.GkeHubFleetTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetTimeouts">GkeHubFleetTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.gkeHubFleet.GkeHubFleetTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GkeHubFleetTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.gkeHubFleet.GkeHubFleetTimeouts">GkeHubFleetTimeouts</a>]

---



