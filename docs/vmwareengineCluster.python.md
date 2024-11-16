# `vmwareengineCluster` Submodule <a name="`vmwareengineCluster` Submodule" id="@cdktf/provider-google.vmwareengineCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VmwareengineCluster <a name="VmwareengineCluster" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/vmwareengine_cluster google_vmwareengine_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.Initializer"></a>

```python
from cdktf_cdktf_provider_google import vmwareengine_cluster

vmwareengineCluster.VmwareengineCluster(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  parent: str,
  autoscaling_settings: VmwareengineClusterAutoscalingSettings = None,
  id: str = None,
  node_type_configs: typing.Union[IResolvable, typing.List[VmwareengineClusterNodeTypeConfigs]] = None,
  timeouts: VmwareengineClusterTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.Initializer.parameter.name">name</a></code> | <code>str</code> | The ID of the Cluster. |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.Initializer.parameter.parent">parent</a></code> | <code>str</code> | The resource name of the private cloud to create a new cluster in. |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.Initializer.parameter.autoscalingSettings">autoscaling_settings</a></code> | <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettings">VmwareengineClusterAutoscalingSettings</a></code> | autoscaling_settings block. |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/vmwareengine_cluster#id VmwareengineCluster#id}. |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.Initializer.parameter.nodeTypeConfigs">node_type_configs</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigs">VmwareengineClusterNodeTypeConfigs</a>]]</code> | node_type_configs block. |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterTimeouts">VmwareengineClusterTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.Initializer.parameter.name"></a>

- *Type:* str

The ID of the Cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/vmwareengine_cluster#name VmwareengineCluster#name}

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.Initializer.parameter.parent"></a>

- *Type:* str

The resource name of the private cloud to create a new cluster in.

Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names.
For example: projects/my-project/locations/us-west1-a/privateClouds/my-cloud

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/vmwareengine_cluster#parent VmwareengineCluster#parent}

---

##### `autoscaling_settings`<sup>Optional</sup> <a name="autoscaling_settings" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.Initializer.parameter.autoscalingSettings"></a>

- *Type:* <a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettings">VmwareengineClusterAutoscalingSettings</a>

autoscaling_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/vmwareengine_cluster#autoscaling_settings VmwareengineCluster#autoscaling_settings}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/vmwareengine_cluster#id VmwareengineCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `node_type_configs`<sup>Optional</sup> <a name="node_type_configs" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.Initializer.parameter.nodeTypeConfigs"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigs">VmwareengineClusterNodeTypeConfigs</a>]]

node_type_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/vmwareengine_cluster#node_type_configs VmwareengineCluster#node_type_configs}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterTimeouts">VmwareengineClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/vmwareengine_cluster#timeouts VmwareengineCluster#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.putAutoscalingSettings">put_autoscaling_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.putNodeTypeConfigs">put_node_type_configs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.resetAutoscalingSettings">reset_autoscaling_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.resetNodeTypeConfigs">reset_node_type_configs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_autoscaling_settings` <a name="put_autoscaling_settings" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.putAutoscalingSettings"></a>

```python
def put_autoscaling_settings(
  autoscaling_policies: typing.Union[IResolvable, typing.List[VmwareengineClusterAutoscalingSettingsAutoscalingPolicies]],
  cool_down_period: str = None,
  max_cluster_node_count: typing.Union[int, float] = None,
  min_cluster_node_count: typing.Union[int, float] = None
) -> None
```

###### `autoscaling_policies`<sup>Required</sup> <a name="autoscaling_policies" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.putAutoscalingSettings.parameter.autoscalingPolicies"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPolicies">VmwareengineClusterAutoscalingSettingsAutoscalingPolicies</a>]]

autoscaling_policies block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/vmwareengine_cluster#autoscaling_policies VmwareengineCluster#autoscaling_policies}

---

###### `cool_down_period`<sup>Optional</sup> <a name="cool_down_period" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.putAutoscalingSettings.parameter.coolDownPeriod"></a>

- *Type:* str

The minimum duration between consecutive autoscale operations.

It starts once addition or removal of nodes is fully completed.
Minimum cool down period is 30m.
Cool down period must be in whole minutes (for example, 30m, 31m, 50m).
Mandatory for successful addition of autoscaling settings in cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/vmwareengine_cluster#cool_down_period VmwareengineCluster#cool_down_period}

---

###### `max_cluster_node_count`<sup>Optional</sup> <a name="max_cluster_node_count" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.putAutoscalingSettings.parameter.maxClusterNodeCount"></a>

- *Type:* typing.Union[int, float]

Maximum number of nodes of any type in a cluster. Mandatory for successful addition of autoscaling settings in cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/vmwareengine_cluster#max_cluster_node_count VmwareengineCluster#max_cluster_node_count}

---

###### `min_cluster_node_count`<sup>Optional</sup> <a name="min_cluster_node_count" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.putAutoscalingSettings.parameter.minClusterNodeCount"></a>

- *Type:* typing.Union[int, float]

Minimum number of nodes of any type in a cluster. Mandatory for successful addition of autoscaling settings in cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/vmwareengine_cluster#min_cluster_node_count VmwareengineCluster#min_cluster_node_count}

---

##### `put_node_type_configs` <a name="put_node_type_configs" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.putNodeTypeConfigs"></a>

```python
def put_node_type_configs(
  value: typing.Union[IResolvable, typing.List[VmwareengineClusterNodeTypeConfigs]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.putNodeTypeConfigs.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigs">VmwareengineClusterNodeTypeConfigs</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/vmwareengine_cluster#create VmwareengineCluster#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/vmwareengine_cluster#delete VmwareengineCluster#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/vmwareengine_cluster#update VmwareengineCluster#update}.

---

##### `reset_autoscaling_settings` <a name="reset_autoscaling_settings" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.resetAutoscalingSettings"></a>

```python
def reset_autoscaling_settings() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_node_type_configs` <a name="reset_node_type_configs" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.resetNodeTypeConfigs"></a>

```python
def reset_node_type_configs() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a VmwareengineCluster resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import vmwareengine_cluster

vmwareengineCluster.VmwareengineCluster.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import vmwareengine_cluster

vmwareengineCluster.VmwareengineCluster.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import vmwareengine_cluster

vmwareengineCluster.VmwareengineCluster.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import vmwareengine_cluster

vmwareengineCluster.VmwareengineCluster.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a VmwareengineCluster resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the VmwareengineCluster to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing VmwareengineCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/vmwareengine_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the VmwareengineCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.property.autoscalingSettings">autoscaling_settings</a></code> | <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsOutputReference">VmwareengineClusterAutoscalingSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.property.management">management</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.property.nodeTypeConfigs">node_type_configs</a></code> | <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsList">VmwareengineClusterNodeTypeConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterTimeoutsOutputReference">VmwareengineClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.property.autoscalingSettingsInput">autoscaling_settings_input</a></code> | <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettings">VmwareengineClusterAutoscalingSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.property.nodeTypeConfigsInput">node_type_configs_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigs">VmwareengineClusterNodeTypeConfigs</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.property.parentInput">parent_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterTimeouts">VmwareengineClusterTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.property.parent">parent</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `autoscaling_settings`<sup>Required</sup> <a name="autoscaling_settings" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.property.autoscalingSettings"></a>

```python
autoscaling_settings: VmwareengineClusterAutoscalingSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsOutputReference">VmwareengineClusterAutoscalingSettingsOutputReference</a>

---

##### `management`<sup>Required</sup> <a name="management" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.property.management"></a>

```python
management: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `node_type_configs`<sup>Required</sup> <a name="node_type_configs" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.property.nodeTypeConfigs"></a>

```python
node_type_configs: VmwareengineClusterNodeTypeConfigsList
```

- *Type:* <a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsList">VmwareengineClusterNodeTypeConfigsList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.property.timeouts"></a>

```python
timeouts: VmwareengineClusterTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterTimeoutsOutputReference">VmwareengineClusterTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `autoscaling_settings_input`<sup>Optional</sup> <a name="autoscaling_settings_input" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.property.autoscalingSettingsInput"></a>

```python
autoscaling_settings_input: VmwareengineClusterAutoscalingSettings
```

- *Type:* <a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettings">VmwareengineClusterAutoscalingSettings</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `node_type_configs_input`<sup>Optional</sup> <a name="node_type_configs_input" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.property.nodeTypeConfigsInput"></a>

```python
node_type_configs_input: typing.Union[IResolvable, typing.List[VmwareengineClusterNodeTypeConfigs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigs">VmwareengineClusterNodeTypeConfigs</a>]]

---

##### `parent_input`<sup>Optional</sup> <a name="parent_input" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.property.parentInput"></a>

```python
parent_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, VmwareengineClusterTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterTimeouts">VmwareengineClusterTimeouts</a>]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.property.parent"></a>

```python
parent: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineCluster.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### VmwareengineClusterAutoscalingSettings <a name="VmwareengineClusterAutoscalingSettings" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_google import vmwareengine_cluster

vmwareengineCluster.VmwareengineClusterAutoscalingSettings(
  autoscaling_policies: typing.Union[IResolvable, typing.List[VmwareengineClusterAutoscalingSettingsAutoscalingPolicies]],
  cool_down_period: str = None,
  max_cluster_node_count: typing.Union[int, float] = None,
  min_cluster_node_count: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettings.property.autoscalingPolicies">autoscaling_policies</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPolicies">VmwareengineClusterAutoscalingSettingsAutoscalingPolicies</a>]]</code> | autoscaling_policies block. |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettings.property.coolDownPeriod">cool_down_period</a></code> | <code>str</code> | The minimum duration between consecutive autoscale operations. |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettings.property.maxClusterNodeCount">max_cluster_node_count</a></code> | <code>typing.Union[int, float]</code> | Maximum number of nodes of any type in a cluster. Mandatory for successful addition of autoscaling settings in cluster. |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettings.property.minClusterNodeCount">min_cluster_node_count</a></code> | <code>typing.Union[int, float]</code> | Minimum number of nodes of any type in a cluster. Mandatory for successful addition of autoscaling settings in cluster. |

---

##### `autoscaling_policies`<sup>Required</sup> <a name="autoscaling_policies" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettings.property.autoscalingPolicies"></a>

```python
autoscaling_policies: typing.Union[IResolvable, typing.List[VmwareengineClusterAutoscalingSettingsAutoscalingPolicies]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPolicies">VmwareengineClusterAutoscalingSettingsAutoscalingPolicies</a>]]

autoscaling_policies block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/vmwareengine_cluster#autoscaling_policies VmwareengineCluster#autoscaling_policies}

---

##### `cool_down_period`<sup>Optional</sup> <a name="cool_down_period" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettings.property.coolDownPeriod"></a>

```python
cool_down_period: str
```

- *Type:* str

The minimum duration between consecutive autoscale operations.

It starts once addition or removal of nodes is fully completed.
Minimum cool down period is 30m.
Cool down period must be in whole minutes (for example, 30m, 31m, 50m).
Mandatory for successful addition of autoscaling settings in cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/vmwareengine_cluster#cool_down_period VmwareengineCluster#cool_down_period}

---

##### `max_cluster_node_count`<sup>Optional</sup> <a name="max_cluster_node_count" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettings.property.maxClusterNodeCount"></a>

```python
max_cluster_node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum number of nodes of any type in a cluster. Mandatory for successful addition of autoscaling settings in cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/vmwareengine_cluster#max_cluster_node_count VmwareengineCluster#max_cluster_node_count}

---

##### `min_cluster_node_count`<sup>Optional</sup> <a name="min_cluster_node_count" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettings.property.minClusterNodeCount"></a>

```python
min_cluster_node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Minimum number of nodes of any type in a cluster. Mandatory for successful addition of autoscaling settings in cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/vmwareengine_cluster#min_cluster_node_count VmwareengineCluster#min_cluster_node_count}

---

### VmwareengineClusterAutoscalingSettingsAutoscalingPolicies <a name="VmwareengineClusterAutoscalingSettingsAutoscalingPolicies" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPolicies.Initializer"></a>

```python
from cdktf_cdktf_provider_google import vmwareengine_cluster

vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPolicies(
  autoscale_policy_id: str,
  node_type_id: str,
  scale_out_size: typing.Union[int, float],
  consumed_memory_thresholds: VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholds = None,
  cpu_thresholds: VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholds = None,
  storage_thresholds: VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholds = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPolicies.property.autoscalePolicyId">autoscale_policy_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/vmwareengine_cluster#autoscale_policy_id VmwareengineCluster#autoscale_policy_id}. |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPolicies.property.nodeTypeId">node_type_id</a></code> | <code>str</code> | The canonical identifier of the node type to add or remove. |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPolicies.property.scaleOutSize">scale_out_size</a></code> | <code>typing.Union[int, float]</code> | Number of nodes to add to a cluster during a scale-out operation. Must be divisible by 2 for stretched clusters. |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPolicies.property.consumedMemoryThresholds">consumed_memory_thresholds</a></code> | <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholds">VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholds</a></code> | consumed_memory_thresholds block. |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPolicies.property.cpuThresholds">cpu_thresholds</a></code> | <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholds">VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholds</a></code> | cpu_thresholds block. |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPolicies.property.storageThresholds">storage_thresholds</a></code> | <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholds">VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholds</a></code> | storage_thresholds block. |

---

##### `autoscale_policy_id`<sup>Required</sup> <a name="autoscale_policy_id" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPolicies.property.autoscalePolicyId"></a>

```python
autoscale_policy_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/vmwareengine_cluster#autoscale_policy_id VmwareengineCluster#autoscale_policy_id}.

---

##### `node_type_id`<sup>Required</sup> <a name="node_type_id" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPolicies.property.nodeTypeId"></a>

```python
node_type_id: str
```

- *Type:* str

The canonical identifier of the node type to add or remove.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/vmwareengine_cluster#node_type_id VmwareengineCluster#node_type_id}

---

##### `scale_out_size`<sup>Required</sup> <a name="scale_out_size" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPolicies.property.scaleOutSize"></a>

```python
scale_out_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Number of nodes to add to a cluster during a scale-out operation. Must be divisible by 2 for stretched clusters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/vmwareengine_cluster#scale_out_size VmwareengineCluster#scale_out_size}

---

##### `consumed_memory_thresholds`<sup>Optional</sup> <a name="consumed_memory_thresholds" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPolicies.property.consumedMemoryThresholds"></a>

```python
consumed_memory_thresholds: VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholds
```

- *Type:* <a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholds">VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholds</a>

consumed_memory_thresholds block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/vmwareengine_cluster#consumed_memory_thresholds VmwareengineCluster#consumed_memory_thresholds}

---

##### `cpu_thresholds`<sup>Optional</sup> <a name="cpu_thresholds" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPolicies.property.cpuThresholds"></a>

```python
cpu_thresholds: VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholds
```

- *Type:* <a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholds">VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholds</a>

cpu_thresholds block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/vmwareengine_cluster#cpu_thresholds VmwareengineCluster#cpu_thresholds}

---

##### `storage_thresholds`<sup>Optional</sup> <a name="storage_thresholds" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPolicies.property.storageThresholds"></a>

```python
storage_thresholds: VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholds
```

- *Type:* <a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholds">VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholds</a>

storage_thresholds block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/vmwareengine_cluster#storage_thresholds VmwareengineCluster#storage_thresholds}

---

### VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholds <a name="VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholds" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholds"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholds.Initializer"></a>

```python
from cdktf_cdktf_provider_google import vmwareengine_cluster

vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholds(
  scale_in: typing.Union[int, float],
  scale_out: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholds.property.scaleIn">scale_in</a></code> | <code>typing.Union[int, float]</code> | The utilization triggering the scale-in operation in percent. |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholds.property.scaleOut">scale_out</a></code> | <code>typing.Union[int, float]</code> | The utilization triggering the scale-out operation in percent. |

---

##### `scale_in`<sup>Required</sup> <a name="scale_in" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholds.property.scaleIn"></a>

```python
scale_in: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The utilization triggering the scale-in operation in percent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/vmwareengine_cluster#scale_in VmwareengineCluster#scale_in}

---

##### `scale_out`<sup>Required</sup> <a name="scale_out" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholds.property.scaleOut"></a>

```python
scale_out: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The utilization triggering the scale-out operation in percent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/vmwareengine_cluster#scale_out VmwareengineCluster#scale_out}

---

### VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholds <a name="VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholds" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholds"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholds.Initializer"></a>

```python
from cdktf_cdktf_provider_google import vmwareengine_cluster

vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholds(
  scale_in: typing.Union[int, float],
  scale_out: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholds.property.scaleIn">scale_in</a></code> | <code>typing.Union[int, float]</code> | The utilization triggering the scale-in operation in percent. |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholds.property.scaleOut">scale_out</a></code> | <code>typing.Union[int, float]</code> | The utilization triggering the scale-out operation in percent. |

---

##### `scale_in`<sup>Required</sup> <a name="scale_in" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholds.property.scaleIn"></a>

```python
scale_in: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The utilization triggering the scale-in operation in percent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/vmwareengine_cluster#scale_in VmwareengineCluster#scale_in}

---

##### `scale_out`<sup>Required</sup> <a name="scale_out" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholds.property.scaleOut"></a>

```python
scale_out: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The utilization triggering the scale-out operation in percent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/vmwareengine_cluster#scale_out VmwareengineCluster#scale_out}

---

### VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholds <a name="VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholds" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholds"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholds.Initializer"></a>

```python
from cdktf_cdktf_provider_google import vmwareengine_cluster

vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholds(
  scale_in: typing.Union[int, float],
  scale_out: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholds.property.scaleIn">scale_in</a></code> | <code>typing.Union[int, float]</code> | The utilization triggering the scale-in operation in percent. |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholds.property.scaleOut">scale_out</a></code> | <code>typing.Union[int, float]</code> | The utilization triggering the scale-out operation in percent. |

---

##### `scale_in`<sup>Required</sup> <a name="scale_in" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholds.property.scaleIn"></a>

```python
scale_in: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The utilization triggering the scale-in operation in percent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/vmwareengine_cluster#scale_in VmwareengineCluster#scale_in}

---

##### `scale_out`<sup>Required</sup> <a name="scale_out" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholds.property.scaleOut"></a>

```python
scale_out: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The utilization triggering the scale-out operation in percent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/vmwareengine_cluster#scale_out VmwareengineCluster#scale_out}

---

### VmwareengineClusterConfig <a name="VmwareengineClusterConfig" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import vmwareengine_cluster

vmwareengineCluster.VmwareengineClusterConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  parent: str,
  autoscaling_settings: VmwareengineClusterAutoscalingSettings = None,
  id: str = None,
  node_type_configs: typing.Union[IResolvable, typing.List[VmwareengineClusterNodeTypeConfigs]] = None,
  timeouts: VmwareengineClusterTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterConfig.property.name">name</a></code> | <code>str</code> | The ID of the Cluster. |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterConfig.property.parent">parent</a></code> | <code>str</code> | The resource name of the private cloud to create a new cluster in. |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterConfig.property.autoscalingSettings">autoscaling_settings</a></code> | <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettings">VmwareengineClusterAutoscalingSettings</a></code> | autoscaling_settings block. |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/vmwareengine_cluster#id VmwareengineCluster#id}. |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterConfig.property.nodeTypeConfigs">node_type_configs</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigs">VmwareengineClusterNodeTypeConfigs</a>]]</code> | node_type_configs block. |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterTimeouts">VmwareengineClusterTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The ID of the Cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/vmwareengine_cluster#name VmwareengineCluster#name}

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterConfig.property.parent"></a>

```python
parent: str
```

- *Type:* str

The resource name of the private cloud to create a new cluster in.

Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names.
For example: projects/my-project/locations/us-west1-a/privateClouds/my-cloud

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/vmwareengine_cluster#parent VmwareengineCluster#parent}

---

##### `autoscaling_settings`<sup>Optional</sup> <a name="autoscaling_settings" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterConfig.property.autoscalingSettings"></a>

```python
autoscaling_settings: VmwareengineClusterAutoscalingSettings
```

- *Type:* <a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettings">VmwareengineClusterAutoscalingSettings</a>

autoscaling_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/vmwareengine_cluster#autoscaling_settings VmwareengineCluster#autoscaling_settings}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/vmwareengine_cluster#id VmwareengineCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `node_type_configs`<sup>Optional</sup> <a name="node_type_configs" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterConfig.property.nodeTypeConfigs"></a>

```python
node_type_configs: typing.Union[IResolvable, typing.List[VmwareengineClusterNodeTypeConfigs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigs">VmwareengineClusterNodeTypeConfigs</a>]]

node_type_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/vmwareengine_cluster#node_type_configs VmwareengineCluster#node_type_configs}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterConfig.property.timeouts"></a>

```python
timeouts: VmwareengineClusterTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterTimeouts">VmwareengineClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/vmwareengine_cluster#timeouts VmwareengineCluster#timeouts}

---

### VmwareengineClusterNodeTypeConfigs <a name="VmwareengineClusterNodeTypeConfigs" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigs.Initializer"></a>

```python
from cdktf_cdktf_provider_google import vmwareengine_cluster

vmwareengineCluster.VmwareengineClusterNodeTypeConfigs(
  node_count: typing.Union[int, float],
  node_type_id: str,
  custom_core_count: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigs.property.nodeCount">node_count</a></code> | <code>typing.Union[int, float]</code> | The number of nodes of this type in the cluster. |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigs.property.nodeTypeId">node_type_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/vmwareengine_cluster#node_type_id VmwareengineCluster#node_type_id}. |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigs.property.customCoreCount">custom_core_count</a></code> | <code>typing.Union[int, float]</code> | Customized number of cores available to each node of the type. |

---

##### `node_count`<sup>Required</sup> <a name="node_count" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigs.property.nodeCount"></a>

```python
node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of nodes of this type in the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/vmwareengine_cluster#node_count VmwareengineCluster#node_count}

---

##### `node_type_id`<sup>Required</sup> <a name="node_type_id" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigs.property.nodeTypeId"></a>

```python
node_type_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/vmwareengine_cluster#node_type_id VmwareengineCluster#node_type_id}.

---

##### `custom_core_count`<sup>Optional</sup> <a name="custom_core_count" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigs.property.customCoreCount"></a>

```python
custom_core_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Customized number of cores available to each node of the type.

This number must always be one of 'nodeType.availableCustomCoreCounts'.
If zero is provided max value from 'nodeType.availableCustomCoreCounts' will be used.
Once the customer is created then corecount cannot be changed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/vmwareengine_cluster#custom_core_count VmwareengineCluster#custom_core_count}

---

### VmwareengineClusterTimeouts <a name="VmwareengineClusterTimeouts" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import vmwareengine_cluster

vmwareengineCluster.VmwareengineClusterTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/vmwareengine_cluster#create VmwareengineCluster#create}. |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/vmwareengine_cluster#delete VmwareengineCluster#delete}. |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/vmwareengine_cluster#update VmwareengineCluster#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/vmwareengine_cluster#create VmwareengineCluster#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/vmwareengine_cluster#delete VmwareengineCluster#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/vmwareengine_cluster#update VmwareengineCluster#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference <a name="VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import vmwareengine_cluster

vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.property.scaleInInput">scale_in_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.property.scaleOutInput">scale_out_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.property.scaleIn">scale_in</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.property.scaleOut">scale_out</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholds">VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholds</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `scale_in_input`<sup>Optional</sup> <a name="scale_in_input" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.property.scaleInInput"></a>

```python
scale_in_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `scale_out_input`<sup>Optional</sup> <a name="scale_out_input" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.property.scaleOutInput"></a>

```python
scale_out_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `scale_in`<sup>Required</sup> <a name="scale_in" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.property.scaleIn"></a>

```python
scale_in: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `scale_out`<sup>Required</sup> <a name="scale_out" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.property.scaleOut"></a>

```python
scale_out: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.property.internalValue"></a>

```python
internal_value: VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholds
```

- *Type:* <a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholds">VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholds</a>

---


### VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference <a name="VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import vmwareengine_cluster

vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.property.scaleInInput">scale_in_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.property.scaleOutInput">scale_out_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.property.scaleIn">scale_in</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.property.scaleOut">scale_out</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholds">VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholds</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `scale_in_input`<sup>Optional</sup> <a name="scale_in_input" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.property.scaleInInput"></a>

```python
scale_in_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `scale_out_input`<sup>Optional</sup> <a name="scale_out_input" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.property.scaleOutInput"></a>

```python
scale_out_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `scale_in`<sup>Required</sup> <a name="scale_in" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.property.scaleIn"></a>

```python
scale_in: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `scale_out`<sup>Required</sup> <a name="scale_out" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.property.scaleOut"></a>

```python
scale_out: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.property.internalValue"></a>

```python
internal_value: VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholds
```

- *Type:* <a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholds">VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholds</a>

---


### VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList <a name="VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import vmwareengine_cluster

vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPolicies">VmwareengineClusterAutoscalingSettingsAutoscalingPolicies</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[VmwareengineClusterAutoscalingSettingsAutoscalingPolicies]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPolicies">VmwareengineClusterAutoscalingSettingsAutoscalingPolicies</a>]]

---


### VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference <a name="VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import vmwareengine_cluster

vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.putConsumedMemoryThresholds">put_consumed_memory_thresholds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.putCpuThresholds">put_cpu_thresholds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.putStorageThresholds">put_storage_thresholds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.resetConsumedMemoryThresholds">reset_consumed_memory_thresholds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.resetCpuThresholds">reset_cpu_thresholds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.resetStorageThresholds">reset_storage_thresholds</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_consumed_memory_thresholds` <a name="put_consumed_memory_thresholds" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.putConsumedMemoryThresholds"></a>

```python
def put_consumed_memory_thresholds(
  scale_in: typing.Union[int, float],
  scale_out: typing.Union[int, float]
) -> None
```

###### `scale_in`<sup>Required</sup> <a name="scale_in" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.putConsumedMemoryThresholds.parameter.scaleIn"></a>

- *Type:* typing.Union[int, float]

The utilization triggering the scale-in operation in percent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/vmwareengine_cluster#scale_in VmwareengineCluster#scale_in}

---

###### `scale_out`<sup>Required</sup> <a name="scale_out" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.putConsumedMemoryThresholds.parameter.scaleOut"></a>

- *Type:* typing.Union[int, float]

The utilization triggering the scale-out operation in percent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/vmwareengine_cluster#scale_out VmwareengineCluster#scale_out}

---

##### `put_cpu_thresholds` <a name="put_cpu_thresholds" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.putCpuThresholds"></a>

```python
def put_cpu_thresholds(
  scale_in: typing.Union[int, float],
  scale_out: typing.Union[int, float]
) -> None
```

###### `scale_in`<sup>Required</sup> <a name="scale_in" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.putCpuThresholds.parameter.scaleIn"></a>

- *Type:* typing.Union[int, float]

The utilization triggering the scale-in operation in percent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/vmwareengine_cluster#scale_in VmwareengineCluster#scale_in}

---

###### `scale_out`<sup>Required</sup> <a name="scale_out" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.putCpuThresholds.parameter.scaleOut"></a>

- *Type:* typing.Union[int, float]

The utilization triggering the scale-out operation in percent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/vmwareengine_cluster#scale_out VmwareengineCluster#scale_out}

---

##### `put_storage_thresholds` <a name="put_storage_thresholds" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.putStorageThresholds"></a>

```python
def put_storage_thresholds(
  scale_in: typing.Union[int, float],
  scale_out: typing.Union[int, float]
) -> None
```

###### `scale_in`<sup>Required</sup> <a name="scale_in" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.putStorageThresholds.parameter.scaleIn"></a>

- *Type:* typing.Union[int, float]

The utilization triggering the scale-in operation in percent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/vmwareengine_cluster#scale_in VmwareengineCluster#scale_in}

---

###### `scale_out`<sup>Required</sup> <a name="scale_out" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.putStorageThresholds.parameter.scaleOut"></a>

- *Type:* typing.Union[int, float]

The utilization triggering the scale-out operation in percent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.2/docs/resources/vmwareengine_cluster#scale_out VmwareengineCluster#scale_out}

---

##### `reset_consumed_memory_thresholds` <a name="reset_consumed_memory_thresholds" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.resetConsumedMemoryThresholds"></a>

```python
def reset_consumed_memory_thresholds() -> None
```

##### `reset_cpu_thresholds` <a name="reset_cpu_thresholds" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.resetCpuThresholds"></a>

```python
def reset_cpu_thresholds() -> None
```

##### `reset_storage_thresholds` <a name="reset_storage_thresholds" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.resetStorageThresholds"></a>

```python
def reset_storage_thresholds() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.consumedMemoryThresholds">consumed_memory_thresholds</a></code> | <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference">VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.cpuThresholds">cpu_thresholds</a></code> | <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference">VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.storageThresholds">storage_thresholds</a></code> | <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference">VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.autoscalePolicyIdInput">autoscale_policy_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.consumedMemoryThresholdsInput">consumed_memory_thresholds_input</a></code> | <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholds">VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.cpuThresholdsInput">cpu_thresholds_input</a></code> | <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholds">VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.nodeTypeIdInput">node_type_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.scaleOutSizeInput">scale_out_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.storageThresholdsInput">storage_thresholds_input</a></code> | <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholds">VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.autoscalePolicyId">autoscale_policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.nodeTypeId">node_type_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.scaleOutSize">scale_out_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPolicies">VmwareengineClusterAutoscalingSettingsAutoscalingPolicies</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `consumed_memory_thresholds`<sup>Required</sup> <a name="consumed_memory_thresholds" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.consumedMemoryThresholds"></a>

```python
consumed_memory_thresholds: VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference">VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference</a>

---

##### `cpu_thresholds`<sup>Required</sup> <a name="cpu_thresholds" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.cpuThresholds"></a>

```python
cpu_thresholds: VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference">VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference</a>

---

##### `storage_thresholds`<sup>Required</sup> <a name="storage_thresholds" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.storageThresholds"></a>

```python
storage_thresholds: VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference">VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference</a>

---

##### `autoscale_policy_id_input`<sup>Optional</sup> <a name="autoscale_policy_id_input" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.autoscalePolicyIdInput"></a>

```python
autoscale_policy_id_input: str
```

- *Type:* str

---

##### `consumed_memory_thresholds_input`<sup>Optional</sup> <a name="consumed_memory_thresholds_input" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.consumedMemoryThresholdsInput"></a>

```python
consumed_memory_thresholds_input: VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholds
```

- *Type:* <a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholds">VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholds</a>

---

##### `cpu_thresholds_input`<sup>Optional</sup> <a name="cpu_thresholds_input" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.cpuThresholdsInput"></a>

```python
cpu_thresholds_input: VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholds
```

- *Type:* <a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholds">VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholds</a>

---

##### `node_type_id_input`<sup>Optional</sup> <a name="node_type_id_input" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.nodeTypeIdInput"></a>

```python
node_type_id_input: str
```

- *Type:* str

---

##### `scale_out_size_input`<sup>Optional</sup> <a name="scale_out_size_input" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.scaleOutSizeInput"></a>

```python
scale_out_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `storage_thresholds_input`<sup>Optional</sup> <a name="storage_thresholds_input" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.storageThresholdsInput"></a>

```python
storage_thresholds_input: VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholds
```

- *Type:* <a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholds">VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholds</a>

---

##### `autoscale_policy_id`<sup>Required</sup> <a name="autoscale_policy_id" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.autoscalePolicyId"></a>

```python
autoscale_policy_id: str
```

- *Type:* str

---

##### `node_type_id`<sup>Required</sup> <a name="node_type_id" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.nodeTypeId"></a>

```python
node_type_id: str
```

- *Type:* str

---

##### `scale_out_size`<sup>Required</sup> <a name="scale_out_size" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.scaleOutSize"></a>

```python
scale_out_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, VmwareengineClusterAutoscalingSettingsAutoscalingPolicies]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPolicies">VmwareengineClusterAutoscalingSettingsAutoscalingPolicies</a>]

---


### VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference <a name="VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import vmwareengine_cluster

vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.property.scaleInInput">scale_in_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.property.scaleOutInput">scale_out_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.property.scaleIn">scale_in</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.property.scaleOut">scale_out</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholds">VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholds</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `scale_in_input`<sup>Optional</sup> <a name="scale_in_input" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.property.scaleInInput"></a>

```python
scale_in_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `scale_out_input`<sup>Optional</sup> <a name="scale_out_input" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.property.scaleOutInput"></a>

```python
scale_out_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `scale_in`<sup>Required</sup> <a name="scale_in" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.property.scaleIn"></a>

```python
scale_in: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `scale_out`<sup>Required</sup> <a name="scale_out" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.property.scaleOut"></a>

```python
scale_out: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.property.internalValue"></a>

```python
internal_value: VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholds
```

- *Type:* <a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholds">VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholds</a>

---


### VmwareengineClusterAutoscalingSettingsOutputReference <a name="VmwareengineClusterAutoscalingSettingsOutputReference" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import vmwareengine_cluster

vmwareengineCluster.VmwareengineClusterAutoscalingSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsOutputReference.putAutoscalingPolicies">put_autoscaling_policies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsOutputReference.resetCoolDownPeriod">reset_cool_down_period</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsOutputReference.resetMaxClusterNodeCount">reset_max_cluster_node_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsOutputReference.resetMinClusterNodeCount">reset_min_cluster_node_count</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_autoscaling_policies` <a name="put_autoscaling_policies" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsOutputReference.putAutoscalingPolicies"></a>

```python
def put_autoscaling_policies(
  value: typing.Union[IResolvable, typing.List[VmwareengineClusterAutoscalingSettingsAutoscalingPolicies]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsOutputReference.putAutoscalingPolicies.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPolicies">VmwareengineClusterAutoscalingSettingsAutoscalingPolicies</a>]]

---

##### `reset_cool_down_period` <a name="reset_cool_down_period" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsOutputReference.resetCoolDownPeriod"></a>

```python
def reset_cool_down_period() -> None
```

##### `reset_max_cluster_node_count` <a name="reset_max_cluster_node_count" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsOutputReference.resetMaxClusterNodeCount"></a>

```python
def reset_max_cluster_node_count() -> None
```

##### `reset_min_cluster_node_count` <a name="reset_min_cluster_node_count" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsOutputReference.resetMinClusterNodeCount"></a>

```python
def reset_min_cluster_node_count() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsOutputReference.property.autoscalingPolicies">autoscaling_policies</a></code> | <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList">VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsOutputReference.property.autoscalingPoliciesInput">autoscaling_policies_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPolicies">VmwareengineClusterAutoscalingSettingsAutoscalingPolicies</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsOutputReference.property.coolDownPeriodInput">cool_down_period_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsOutputReference.property.maxClusterNodeCountInput">max_cluster_node_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsOutputReference.property.minClusterNodeCountInput">min_cluster_node_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsOutputReference.property.coolDownPeriod">cool_down_period</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsOutputReference.property.maxClusterNodeCount">max_cluster_node_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsOutputReference.property.minClusterNodeCount">min_cluster_node_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettings">VmwareengineClusterAutoscalingSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `autoscaling_policies`<sup>Required</sup> <a name="autoscaling_policies" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsOutputReference.property.autoscalingPolicies"></a>

```python
autoscaling_policies: VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList
```

- *Type:* <a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList">VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList</a>

---

##### `autoscaling_policies_input`<sup>Optional</sup> <a name="autoscaling_policies_input" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsOutputReference.property.autoscalingPoliciesInput"></a>

```python
autoscaling_policies_input: typing.Union[IResolvable, typing.List[VmwareengineClusterAutoscalingSettingsAutoscalingPolicies]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsAutoscalingPolicies">VmwareengineClusterAutoscalingSettingsAutoscalingPolicies</a>]]

---

##### `cool_down_period_input`<sup>Optional</sup> <a name="cool_down_period_input" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsOutputReference.property.coolDownPeriodInput"></a>

```python
cool_down_period_input: str
```

- *Type:* str

---

##### `max_cluster_node_count_input`<sup>Optional</sup> <a name="max_cluster_node_count_input" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsOutputReference.property.maxClusterNodeCountInput"></a>

```python
max_cluster_node_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_cluster_node_count_input`<sup>Optional</sup> <a name="min_cluster_node_count_input" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsOutputReference.property.minClusterNodeCountInput"></a>

```python
min_cluster_node_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cool_down_period`<sup>Required</sup> <a name="cool_down_period" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsOutputReference.property.coolDownPeriod"></a>

```python
cool_down_period: str
```

- *Type:* str

---

##### `max_cluster_node_count`<sup>Required</sup> <a name="max_cluster_node_count" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsOutputReference.property.maxClusterNodeCount"></a>

```python
max_cluster_node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_cluster_node_count`<sup>Required</sup> <a name="min_cluster_node_count" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsOutputReference.property.minClusterNodeCount"></a>

```python
min_cluster_node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettingsOutputReference.property.internalValue"></a>

```python
internal_value: VmwareengineClusterAutoscalingSettings
```

- *Type:* <a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterAutoscalingSettings">VmwareengineClusterAutoscalingSettings</a>

---


### VmwareengineClusterNodeTypeConfigsList <a name="VmwareengineClusterNodeTypeConfigsList" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import vmwareengine_cluster

vmwareengineCluster.VmwareengineClusterNodeTypeConfigsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> VmwareengineClusterNodeTypeConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigs">VmwareengineClusterNodeTypeConfigs</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[VmwareengineClusterNodeTypeConfigs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigs">VmwareengineClusterNodeTypeConfigs</a>]]

---


### VmwareengineClusterNodeTypeConfigsOutputReference <a name="VmwareengineClusterNodeTypeConfigsOutputReference" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import vmwareengine_cluster

vmwareengineCluster.VmwareengineClusterNodeTypeConfigsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsOutputReference.resetCustomCoreCount">reset_custom_core_count</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_custom_core_count` <a name="reset_custom_core_count" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsOutputReference.resetCustomCoreCount"></a>

```python
def reset_custom_core_count() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsOutputReference.property.customCoreCountInput">custom_core_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsOutputReference.property.nodeCountInput">node_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsOutputReference.property.nodeTypeIdInput">node_type_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsOutputReference.property.customCoreCount">custom_core_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsOutputReference.property.nodeCount">node_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsOutputReference.property.nodeTypeId">node_type_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigs">VmwareengineClusterNodeTypeConfigs</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `custom_core_count_input`<sup>Optional</sup> <a name="custom_core_count_input" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsOutputReference.property.customCoreCountInput"></a>

```python
custom_core_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `node_count_input`<sup>Optional</sup> <a name="node_count_input" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsOutputReference.property.nodeCountInput"></a>

```python
node_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `node_type_id_input`<sup>Optional</sup> <a name="node_type_id_input" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsOutputReference.property.nodeTypeIdInput"></a>

```python
node_type_id_input: str
```

- *Type:* str

---

##### `custom_core_count`<sup>Required</sup> <a name="custom_core_count" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsOutputReference.property.customCoreCount"></a>

```python
custom_core_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `node_count`<sup>Required</sup> <a name="node_count" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsOutputReference.property.nodeCount"></a>

```python
node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `node_type_id`<sup>Required</sup> <a name="node_type_id" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsOutputReference.property.nodeTypeId"></a>

```python
node_type_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, VmwareengineClusterNodeTypeConfigs]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterNodeTypeConfigs">VmwareengineClusterNodeTypeConfigs</a>]

---


### VmwareengineClusterTimeoutsOutputReference <a name="VmwareengineClusterTimeoutsOutputReference" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import vmwareengine_cluster

vmwareengineCluster.VmwareengineClusterTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterTimeouts">VmwareengineClusterTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, VmwareengineClusterTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.vmwareengineCluster.VmwareengineClusterTimeouts">VmwareengineClusterTimeouts</a>]

---



